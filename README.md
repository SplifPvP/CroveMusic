# 🎧 CroveMusic

A complete code to download for a music bot 🎧

Looking for a code for a music bot ? This fully open source code is made for your project!

# 📊 Installation

To use the project correctly you will need some tools.

[FFmpeg](https://www.ffmpeg.org) to process audio

[Node JS](https://nodejs.org/en/) (v16) for environment

## ⚙ Configuration

Open the configuration file located in the main folder `config.js`.

```js
module.exports = {
    app: {
        px: 'Your-bot-prefix',
        playing: 'i love SplifPvP 💕'
    },
    opt: {
        DJ: {
            enabled: false,
            roleName: 'XXX',
            commands: []
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {}
    }
};
```

### Basic configuration

- Set `app/px`, the prefix that will be set to use the bot
- put `.env.example/TOKEN`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section
- Edit `.env.example` file and paste your bot token.
- Rename `.env.example` to `.env`.
- The activity of the bot `app/playing`.

## 👮‍♂️ Warning

I will be improving the bot over time, I hope you leave your star if you liked the bot.
Warning: the bot is not 100% my property, in this case I only fixed it in some things.
