const { META } = require('@consumet/extensions');
const anilist = new META.Anilist();

export default async function handler(req, res) {
    const { id } = req.query;
    const anime = await anilist.fetchAnimeInfo(id);
    res.status(200).json(anime);
}
