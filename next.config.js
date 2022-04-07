module.exports = {
    async redirects() {
        return [
            {
                source: "/github/:path*",
                destination: "https://github.com/Taimoor-Tariq/:path*",
                permanent: true,
            },
            {
                source: "/twitter",
                destination: "https://twitter.com/_TaimoorTariq",
                permanent: true,
            },
            {
                source: "/linkedin",
                destination: "https://www.linkedin.com/in/MuhammadTaimoorTariq",
                permanent: true,
            },
            {
                source: "/kofi",
                destination: "https://ko-fi.com/C0C030IH9",
                permanent: true,
            },
            {
                source: "/projects/ball-simulation",
                destination: "https://Balls-Colliding-Simulation.taimoor-tariq.repl.co",
                permanent: true,
            },
            {
                source: "/projects/chat-app/:path*",
                destination: "https://chat-app.projects.taimoor.me/:path*",
                permanent: true,
            },
        ];
    }
};