import botkit from 'botkit';
// import { pipe } from 'ramda';
// import { slackBotAccessToken } from '../env';
// import { init, ping } from '../controllers/slack';

const controller = botkit
  .slackbot({
    debug: false,
    json_file_store: './simple_storage/',
  })
  .configureSlackApp({
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || '',
    redirectUri: 'https://sushi-kun.herokuapp.com/oauth',
    scopes: ['commands', 'bot'],
  });

controller.setupWebserver(process.env.PORT as any, () => {
  controller
    .createOauthEndpoints((controller as any).webserver, (err, _, res) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send('Success');
      }
    })
    .createWebhookEndpoints((controller as any).webserver);
});

// /slack/receiveというslack commandのリクエスト先
controller.on('slash_command', (bot, message) => {
  bot.replyPublic(message, `pong!! <@${message.user}>`);
});

// controller
//   .spawn({
//     token: slackBotAccessToken || '',
//   })
//   .startRTM(init);

// pipe(ping)(controller);
