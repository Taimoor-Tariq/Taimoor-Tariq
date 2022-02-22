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
                source: "/projects/chat-app/:path*",
                destination: "https://chat-app.projects.taimoor.me/:path*",
                permanent: true,
            },
        ];
    }
};