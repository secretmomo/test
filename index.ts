import dayjs from "dayjs";

console.log("start");
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));

console.log("end");


const url = `https://finance.sina.com.cn/realstock/company/klc_td_sh.txt`;
const res = await fetch(url) ;
const data = await res.text();
console.log(data);