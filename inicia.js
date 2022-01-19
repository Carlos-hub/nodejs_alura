module.exports = {
    apps: [{
        name: 'Nome',
        script: './index.js', //arquivo principal 
        watch: true,
        error_file : "err.log",
        ignore_watch: ["node_modules", "public"],
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};