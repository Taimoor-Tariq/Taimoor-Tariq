const Compaines = [
    {
        name: "Samsung",
        logo: "/images/logos/samsung.png"
    },
    {
        name: "OPSE",
        logo: "/images/logos/opse.png"
    },
    {
        name: "Wichita Wolves",
        logo: "/images/logos/wolves.png"
    },
];

export default function Layout() {
    return (
        <div className='frame'>
            <p className="mb-3 text-2xl font-bold">About Me</p>
            <p className="mb-8 indent-8 text-gray-400">Full-Stack Developer. Currently enrolled at Carleton University, I have been creating applications since high school. I have created a wide variety of programs and am capable of implementing ideas that I have into practical programs. With my experience working on a large number of team projects, I have developed great teamwork and leadership skills that would be very valuable for me when settling into new work environments.</p>

            <p className="mb-3 text-2xl font-bold">Companies I've worked with</p>
            <div className="mx-auto pt-4 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 justify-center">
                    <div className="hidden lg:block" />
                    {Compaines.map((c, key) => {
                        return (
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1" key={key}>
                                <img className="h-12" src={c.logo} alt={c.name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}