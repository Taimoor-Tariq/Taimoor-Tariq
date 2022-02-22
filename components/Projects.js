export default function Layout() {
    const repos = [
        'BetterDiscordStuff',
        'realtime-chat-app',
    ];
    
    return (
        <div className='frame'>
            <p className="mb-6 text-2xl font-bold">Projects</p>
            <div className='flex flex-wrap gap-4 gap-y-2'>
                {repos.map((r, key) => {
                    return (
                        <a href={`/github/${r}`} target="_blank" className="grow h-18 rounded mb-3 scale-[98%] hover:scale-100 shadow-lg hover:shadow-gray-900 transition">
                            <img key={key} className='w-full' src={`https://github-readme-stats.vercel.app/api/pin/?username=Taimoor-Tariq&repo=${r}&bg_color=111827&border_color=374151&title_color=e5e7eb&text_color=9ca3af&icon_color=e5e7eb`} alt='' />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}