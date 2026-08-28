import { Sequelize } from 'sequelize';
import { env } from './env.js';
import { logger } from './logger.js';

export const database = new Sequelize(env.database.name, env.database.user, env.database.password, {
  host: env.database.host,
  port: env.database.port,
  dialect: 'postgres',
  logging:
    env.nodeEnv === 'development'
      ? (sql: string): void => {
          logger.debug(sql);
        }
      : false,
});

export const connectDatabase = async (): Promise<void> => {
  await database.authenticate();
  logger.info('Database connection established.');
};
