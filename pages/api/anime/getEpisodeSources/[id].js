const { ANIME } = require('@consumet/extensions');
const replaceLast = require('replace-last');

const gogoanime = new ANIME.Gogoanime();

const getEpisodeSources = async (id) => {
    let sources = [];

    let id1 = replaceLast(id, 'episode', 'uncensored-episode');
    let name = replaceLast(id, RegExp(/-episode-\d+/), '-uncensored');

    const { results } = await gogoanime.search(name);
    if (results.length > 0) sources = (await gogoanime.fetchEpisodeSources(id1)).sources;
    else sources = (await gogoanime.fetchEpisodeSources(id)).sources;

    return {
        url: sources.find((source) => source.quality === "default").url.replace(".m3u8", ""),
        qualities: sources.map((source) => source.quality).filter((quality) => quality !== "backup" && quality !== "default")
    };
}

export default async function handler(req, res) {
    const { id } = req.query;
    const sources = await getEpisodeSources(id);
    res.status(200).json(sources);
}
