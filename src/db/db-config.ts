import { DataSourceOptions } from 'typeorm';

export const databaseConfig = (isMigrationRun = true): DataSourceOptions => {
    const ROOT_PATH = process.cwd();
    const migrationPath = `${ROOT_PATH}/**/migrations/*{.ts,.js}`;
    const entitiesPath = `${ROOT_PATH}/**/*.entity{.ts,.js}`;

    return {
        type: 'postgres',
        host: process.env.RDS_HOSTNAME,
        port: +(process.env.RDS_PORT as string),
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME,
        entities: [entitiesPath],
        migrations: [migrationPath],
        migrationsTableName: 'migrations',
        migrationsRun: isMigrationRun,
        logging: true,
        synchronize: true,
        ssl: {
            rejectUnauthorized: false,
        },
    };
};
