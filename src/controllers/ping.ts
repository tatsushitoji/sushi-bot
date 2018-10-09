import {
  Controller,
  SlackSpawnConfiguration,
  SlackMessage,
  SlackBot,
} from 'botkit';

export const ping = (
  controller: Controller<SlackSpawnConfiguration, SlackMessage, SlackBot>,
) =>
  controller.hears(
    /^ping$/i,
    ['direct_message', 'direct_mention', 'mention'],
    (bot, message) => bot.reply(message, 'pong'),
  );
