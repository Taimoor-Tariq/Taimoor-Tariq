import fetch from 'node-fetch';

const handler = async (req, res) => {
    const { plugin } = req.query;
    const response = await fetch(`https://raw.githubusercontent.com/Taimoor-Tariq/BetterDiscordStuff/main/Plugins/${plugin}/${plugin}.plugin.js`);

    let pluginFile = await response.text();

    res.json({
        schemaVersion: 1,
        label: "version",
        message: pluginFile.match(/@version\s+(\d+\.\d+\.\d+)/)[1],
        color: "14ad47"
    })
};

export default handler;