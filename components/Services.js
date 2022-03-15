import { editorAndServices } from "../public/profile";

const badges = editorAndServices.map(s => { return { badge: `https://img.shields.io/badge/${s.name}-${s.badge.color}?style=for-the-badge&logo=${s.badge.name}&logoColor=${s.badge.logoColor}`, link: s.url } });

export default function Layout() {
    const Badge = ({src, href='#'}) => {
        return (
            <a href={href} target="_blank" className="scale-95 hover:scale-100 drop-shadow-lg hover:shadow-gray-900 transition">
                <img className='h-8 mb-1 rounded shadow-md' src={src} alt='' />
            </a>
        )
    }

    return (
        <div className='frame'>
            <p className="mb-6 text-2xl font-bold">🦖 Editor and Services I use</p>
            <div className='flex flex-wrap gap-2'>
                {badges.map((b, key) => {
                    return (
                        <Badge src={b.badge} href={b.link} key={key} />
                    )
                })}
            </div>
        </div>
    )
}