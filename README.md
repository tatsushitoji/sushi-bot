# sushi-kun

[![CircleCI](https://circleci.com/gh/tatsushitoji/sushi-bot.svg?style=svg)](https://circleci.com/gh/tatsushitoji/sushi-bot) 
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[botkit](https://github.com/howdyai/botkit) based bot of :sushi:

## Getting Started

### Environment Variables

#### NODE_ENV
`production` or `development`

#### SLACK_BOT_ACCESS_TOKEN
sushinotnama BOT TOKEN
set `.env`

```bash
$ cp .env.template .env
$ vi .env
# set SLACK_BOT_ACCESS_TOKEN
```

#### nodeJS
Install node.js written { engines.node } of `package.json` with version manager, e.g. [nodenv](https://github.com/nodenv/nodenv), [ndenv](https://github.com/riywo/ndenv), [nvm](https://github.com/creationix/nvm).

Recommended using [yarn](https://yarnpkg.com/en/). If you have not installed yarn, refer to the [official install guide](https://yarnpkg.com/en/docs/install).

```bash
$ yarn install
$ yarn start
# open slack app and mension at front-end channel or direct message
```