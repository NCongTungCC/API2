import 'dotenv/config';

const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: toNumber(process.env.PORT, 5000),
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: toNumber(process.env.DB_PORT, 5432),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? process.env.DB_PASS ?? '',
    name: process.env.DB_NAME ?? 'typescript_express',
  },
  log: {
    level: process.env.LOG_LEVEL ?? 'info',
  },
};
