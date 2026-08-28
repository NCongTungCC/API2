import { createServer } from 'node:http';
import { app } from './app.js';
import { connectDatabase, database } from './config/database.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';

const server = createServer(app);

const start = async (): Promise<void> => {
  await connectDatabase();

  server.listen(env.port, () => {
    logger.info(`API listening on port ${env.port}`);
  });
};

const shutdown = async (signal: string): Promise<void> => {
  logger.info(`${signal} received. Shutting down.`);
  server.close(async () => {
    await database.close();
    process.exit(0);
  });
};

process.once('SIGINT', () => {
  shutdown('SIGINT').catch((error: unknown) => logger.error('Shutdown failed.', error));
});
process.once('SIGTERM', () => {
  shutdown('SIGTERM').catch((error: unknown) => logger.error('Shutdown failed.', error));
});

start().catch((error: unknown) => {
  logger.error('Failed to start API.', error);
  process.exit(1);
});
