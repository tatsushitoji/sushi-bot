import botkit from 'botkit';
import { slackBotAccessToken } from './env';

const controller = botkit.slackbot({
  debug: false,
});

controller
  .spawn({
    token: slackBotAccessToken || '',
  })
  .startRTM();

controller.hears(
  'ping',
  ['direct_message', 'direct_mention', 'mention'],
  (bot, message) => {
    bot.reply(message, 'pong');
  },
);
