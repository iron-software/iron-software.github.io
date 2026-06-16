/**
 * statuslogger.mjs — colorized status output (Node port of statuslogger.py).
 *
 * Uses raw ANSI escape codes; Node enables VT processing on Windows 10+ consoles automatically,
 * so no colorama-style shim is needed. Each method maps to the same level as the Python logger.
 */

const RESET = "\x1b[0m";
const COLOR = {
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  brightGreen: "\x1b[92m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  brightWhite: "\x1b[97m",
  brightYellow: "\x1b[93m",
  white: "\x1b[37m",
};

const emit = (color, message) => console.log(`${color}${message}${RESET}`);

export const StatusLogger = {
  progress: (message) => emit(COLOR.blue, message),
  title: (message) => emit(COLOR.yellow, message),
  warning: (message) => emit(COLOR.brightGreen, message),
  error: (message) => emit(COLOR.red, message),
  debug: (message) => emit(COLOR.cyan, message),
  success: (message) => emit(COLOR.green, message),
  info: (message) => emit(COLOR.brightWhite, message),
  notice: (message) => emit(COLOR.brightYellow, message),
  message: (message) => emit(COLOR.white, message),
};
