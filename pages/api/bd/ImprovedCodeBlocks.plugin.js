import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);

const handler = async (req, res) => {
    const filename = "ImprovedCodeBlocks.plugin.js",
          response = await fetch(`https://raw.githubusercontent.com/Taimoor-Tariq/BetterDiscordStuff/main/${filename.split('.')[1] == 'plugin'?'Plugins':'Themes'}/${filename.split('.')[0]}/${filename}`);
    
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

    res.setHeader('Content-Type', 'text/javascript');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    await pipeline(response.body, res);
    res.end()
};

export default handler;