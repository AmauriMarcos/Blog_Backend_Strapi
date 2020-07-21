module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        /* host: env('DATABASE_HOST', 'cluster0.comnn.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'blog-backend'),
        username: env('DATABASE_USERNAME', 'amaurisantos'),
        password: env('DATABASE_PASSWORD', 'meuCPF37060257870'), */
        "uri": "${process.env.DATABASE_URI}",
        "database": "${process.env.DATABASE_NAME}"
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
