import botkit from 'botkit';
import { pipe } from 'ramda';
import { slackBotAccessToken } from '../env';
import { init, ping } from '../controllers/slack';

const controller = botkit.slackbot({
  debug: false,
});

controller
  .spawn({
    token: slackBotAccessToken || '',
  })
  .startRTM(init);

pipe(ping)(controller);
