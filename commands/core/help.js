const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor( client.user.username, client.user.displayAvatarURL() );

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription(`Bot commands, use the prefix \`=\` to better interact with the bot.`);
        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setImage('https://cdn.discordapp.com/attachments/853062371794616320/965028139535319050/Thumbnail-CroveMusic.png');

        message.channel.send({ embeds: [embed] });
    },
};