import dayjs from "dayjs";

console.log("start");
console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));

console.log("end");


const url = `https://www.szse.cn/api/report/exchange/onepersistenthour/monthList?month=${dayjs().format("YYYY-MM")}`;
const res = await fetch(url) ;
const data = await res.json();
console.log(data);