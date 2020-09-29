
console.log(process.env);
const local = process.env.REACT_APP_API_URL;
export default {
    getCode: `${local}/LotteryNew/GetWxAuthCode`
}