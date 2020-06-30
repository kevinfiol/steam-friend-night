const config = {
    port: 8080,
    database: {
        dialect: 'sqlite',
        options: {
            filepath: './sfn.db'
        }
    },
    services: {
        steam_service: {
            url: 'https://steam-serv.herokuapp.com'
        }
    }
};

export default config;