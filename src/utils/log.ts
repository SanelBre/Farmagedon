const red = "\x1b[31m";
const yellow = "\x1b[33m";
const green = "\x1b[32m";

const logGreen = (msg: string): void => console.log(green, msg, "\x1b[37m");

const logYellow = (msg: string): void => console.log(yellow, msg, "\x1b[37m");

const logRed = (msg: string): void => console.log(red, msg, "\x1b[37m");

export { logGreen, logYellow, logRed };
