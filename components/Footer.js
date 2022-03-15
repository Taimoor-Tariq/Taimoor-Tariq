import { socials } from "../public/profile";

export default function Layout() {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {socials.map((item) => {
                        if (!item.hideOnSite) return (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                className="text-gray-400 hover:text-gray-300"
                            >
                                <span className="sr-only">{item.name}</span>
                                <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/${item.icon}.svg`} alt={item.name} className="invert h-6 w-6 opacity-50 hover:opacity-90 transition-all duration-300" />
                            </a>
                        );
                    })}
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-gray-400">
                        &copy; 2022 Taimoor Tariq
                    </p>
                </div>
            </div>
        </footer>
    );
}
