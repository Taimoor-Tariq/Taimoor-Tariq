const badges = [
    {badge: 'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white', link: 'https://nextjs.org/'},
    {badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', link: 'https://tailwindcss.com/'},
    {badge: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white', link: 'https://nodejs.org/en/'},
    {badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white', link: 'https://expressjs.com/'},
    {badge: 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white', link: 'https://sass-lang.com/'},
    {badge: 'https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black', link: 'https://pugjs.org/'},
    {badge: 'https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white', link: 'https://socket.io/'},
    {badge: 'https://img.shields.io/badge/strapi-2e7eea?style=for-the-badge&logo=strapi&logoColor=white', link: 'https://strapi.io/'},
    {badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E', link: 'https://javascript.com/'},
    {badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white', link: 'https://www.typescriptlang.org/'},
    {badge: 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue', link: 'https://www.python.org/'},
    {badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', link: 'https://www.w3.org/html/'},
    {badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', link: 'https://www.w3.org/Style/CSS/'},
    {badge: 'https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white', link: 'https://www.lua.org/'},
    {badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', link: 'https://reactjs.org/'},
    {badge: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' , link: 'https://getbootstrap.com/'}
];

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
            <p className="mb-6 text-2xl font-bold">Languages and Frameworks I use</p>
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