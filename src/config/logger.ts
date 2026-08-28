import winston from 'winston';
import { localStorageHelper, maskHelper } from '../helpers/index.js';
import { env } from './env.js';

const LEVELS = [
  'emerg',
  'alert',
  'crit',
  'error',
  'warning',
  'notice',
  'info',
  'debug',
] as const;

export type LogLevel = (typeof LEVELS)[number];

type LogMethod = (message: string, ...meta: unknown[]) => void;

export type Logger = Record<LogLevel, LogMethod> & {
  log: (level: LogLevel, message: string, ...meta: unknown[]) => void;
};

const customFormat = winston.format((info) => {
  const requestId = localStorageHelper.get<string>('requestId');

  let text = `${new Date().toISOString()} [${process.pid}]`;

  if (requestId !== undefined) {
    text += ` [${requestId}]`;
  }

  return { ...info, level: `${text} - ${info.level}` };
});

const buildFormat = (): winston.Logform.Format =>
  winston.format.combine(customFormat(), winston.format.splat(), winston.format.simple());

const createWinstonLogger = (): winston.Logger =>
  winston.createLogger({
    levels: winston.config.syslog.levels,
    transports: [
      new winston.transports.Console({
        level: env.log.level,
        handleExceptions: true,
        format: buildFormat(),
      }),
    ],
    exitOnError: false,
  });

export const createLogger = (): Logger => {
  const base = createWinstonLogger();

  const log = (level: LogLevel, message: string, ...meta: unknown[]): void => {
    const masked = meta.map((arg) =>
      maskHelper.isPlainObject(arg) ? maskHelper.maskData(arg) : arg
    );

    base.log(level, message, ...masked);
  };

  const methods = Object.fromEntries(
    LEVELS.map((level) => [
      level,
      (message: string, ...meta: unknown[]): void => log(level, message, ...meta),
    ])
  ) as Record<LogLevel, LogMethod>;

  return { ...methods, log };
};

export const logger = createLogger();
