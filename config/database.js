module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        /* "host": "${process.env.DATABASE_HOST}", */
    /*     "srv":  env.bool('DATABASE_SRV', true), */
       /*  "port": "${process.env.DATABASE_PORT}",
        "database": "${process.env.DATABASE_NAME}",
        "username": "${process.env.DATABASE_USERNAME}",
        "password": "${process.env.DATABASE_PASSWORD}",
        "uri": "${process.env.DATABASE_URI}" */
        host: `${process.env.DATABASE_HOST}`,
        srv: `${process.env.DATABASE_SRV}`,
        port: `${process.env.DATABASE_PORT}`,
        database: `${process.env.DATABASE_NAME}`,
        username: `${process.env.DATABASE_USERNAME}`,
        password: `${process.env.DATABASE_PASSWORD}`,
        uri: `${process.env.DATABASE_URI}`
        /* uri: "${process.env.DATABASE_URI}",
        database: "${process.env.DATABASE_NAME}" */
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        /* ssl: env.bool('DATABASE_SSL', true), */
        ssl: true
      },
    },
  },
});


