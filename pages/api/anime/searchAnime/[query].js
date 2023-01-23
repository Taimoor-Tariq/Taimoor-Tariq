const { META } = require('@consumet/extensions');
const anilist = new META.Anilist();

export default async function handler(req, res) {
    const { query } = req.query;
    const { results } = await anilist.search(query);
    res.status(200).json(results);
}
