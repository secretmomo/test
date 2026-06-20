import dayjs from "dayjs";
import pino from 'pino';

console.log("start");
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));

console.log("end");


// const url = `https://finance.sina.com.cn/realstock/company/klc_td_sh.txt`;
// const res = await fetch(url) ;
// const data = await res.text();
// console.log(data);


export const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      // 使用系统时间，默认按 UTC 显示时间。
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
      ignore: 'pid,hostname,age',
    },
  },
});

logger.info('Hello, world!');
logger.warn('Hello, world!');
logger.error('Hello, world!');
logger.debug('Hello, world!');
logger.trace('Hello, world!');
logger.fatal('Hello, world!');
logger.child({ name: 'test', age: 18 }).info('Hello, world!');
// logger.error(new Error('Hello, world!'));
