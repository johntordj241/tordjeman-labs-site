import debug from 'debug';
import chalk from 'chalk';

// Create namespaced loggers
const logDev = debug('dev');
const logError = debug('error');
const logApi = debug('api');
const logEvent = debug('event');
const logBuild = debug('build');
const logScript = debug('script');
const logAction = debug('action');

// Enable all loggers in development
if (process.env.NODE_ENV === 'development') {
  debug.enable('*');
}

export const logger = {
  // Development logs
  dev: (message: string, ...args: any[]) => {
    logDev(chalk.blue('DEV:'), message, ...args);
    console.log(chalk.blue('DEV:'), message, ...args);
  },

  // Error and warning logs
  error: (message: string, error?: Error) => {
    logError(chalk.red('ERROR:'), message, error);
    console.error(chalk.red('ERROR:'), message, error);
  },

  warn: (message: string, ...args: any[]) => {
    logError(chalk.yellow('WARN:'), message, ...args);
    console.warn(chalk.yellow('WARN:'), message, ...args);
  },

  // API related logs
  api: {
    request: (method: string, url: string, data?: any) => {
      logApi(chalk.cyan('API REQUEST:'), `${method} ${url}`, data);
      console.log(chalk.cyan('API REQUEST:'), `${method} ${url}`, data);
    },
    response: (status: number, data: any) => {
      logApi(chalk.cyan('API RESPONSE:'), `Status: ${status}`, data);
      console.log(chalk.cyan('API RESPONSE:'), `Status: ${status}`, data);
    },
    error: (error: any) => {
      logApi(chalk.red('API ERROR:'), error);
      console.error(chalk.red('API ERROR:'), error);
    }
  },

  // Event notifications
  event: {
    user: (userId: string, action: string) => {
      logEvent(chalk.magenta('USER EVENT:'), `User ${userId}:`, action);
      console.log(chalk.magenta('USER EVENT:'), `User ${userId}:`, action);
    },
    system: (event: string, details?: any) => {
      logEvent(chalk.magenta('SYSTEM EVENT:'), event, details);
      console.log(chalk.magenta('SYSTEM EVENT:'), event, details);
    }
  },

  // Build and compilation logs
  build: {
    start: (target: string) => {
      logBuild(chalk.green('BUILD START:'), target);
      console.log(chalk.green('BUILD START:'), target);
    },
    complete: (target: string, time: number) => {
      logBuild(chalk.green('BUILD COMPLETE:'), `${target} (${time}ms)`);
      console.log(chalk.green('BUILD COMPLETE:'), `${target} (${time}ms)`);
    },
    error: (error: Error) => {
      logBuild(chalk.red('BUILD ERROR:'), error);
      console.error(chalk.red('BUILD ERROR:'), error);
    }
  },

  // Script execution logs
  script: {
    start: (scriptId: string, userId: string) => {
      logScript(chalk.blue('SCRIPT START:'), `${scriptId} by ${userId}`);
      console.log(chalk.blue('SCRIPT START:'), `${scriptId} by ${userId}`);
    },
    output: (scriptId: string, output: string) => {
      logScript(chalk.blue('SCRIPT OUTPUT:'), `${scriptId}:`, output);
      console.log(chalk.blue('SCRIPT OUTPUT:'), `${scriptId}:`, output);
    },
    error: (scriptId: string, error: Error) => {
      logScript(chalk.red('SCRIPT ERROR:'), `${scriptId}:`, error);
      console.error(chalk.red('SCRIPT ERROR:'), `${scriptId}:`, error);
    }
  },

  // User action validation logs
  action: {
    start: (userId: string, action: string) => {
      logAction(chalk.cyan('ACTION START:'), `${userId}: ${action}`);
      console.log(chalk.cyan('ACTION START:'), `${userId}: ${action}`);
    },
    complete: (userId: string, action: string) => {
      logAction(chalk.green('ACTION COMPLETE:'), `${userId}: ${action}`);
      console.log(chalk.green('ACTION COMPLETE:'), `${userId}: ${action}`);
    },
    fail: (userId: string, action: string, error: Error) => {
      logAction(chalk.red('ACTION FAILED:'), `${userId}: ${action}`, error);
      console.error(chalk.red('ACTION FAILED:'), `${userId}: ${action}`, error);
    }
  }
};