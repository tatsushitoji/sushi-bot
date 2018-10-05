import dotenv from 'dotenv';

dotenv.config();

export const nodeEnv = process.env.NODE_ENV;

export const slackBotAccessToken = process.env.SLACK_BOT_ACCESS_TOKEN;
