import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

console.log("start");
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));

dayjs.extend(utc);
dayjs.extend(timezone);

console.log("before set default");
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs().tz().format("YYYY-MM-DD HH:mm:ss"));

/** 北京时间（中国标准时间，IANA: Asia/Shanghai） */
dayjs.tz.setDefault("Asia/Shanghai");

console.log("after set default");
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));
console.log(dayjs().tz().format("YYYY-MM-DD HH:mm:ss"));
