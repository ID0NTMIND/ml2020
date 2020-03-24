const n = readline();
const array = [];
for (var i = 0; i < n; i += 1){
    var tmp  = readline().split(" ");
    array[i] = [tmp[0],tmp[1]];
    
}
const yObj = {};
const xObj = {};
const xxArr = array.map((elem) => elem[0]);
const yyArr = array.map((elem) => elem[1]);
const xArr = array.map((elem, i) => [elem[0], i + 1]).sort((a, b) => a[0] - b[0]).map((elem, i) => {
xObj[elem[0]] = i + 1;
return elem[0];
});
const yArr = array.map((elem, i) => [elem[1], i + 1]).sort((a, b)=> a[0] - b[0]).map((elem, i) => {
yObj[elem[0]] = i+1;
return elem[0];
});
var d = 0;
for (var i = 0; i < n; i += 1){
  d = d + Math.pow((xObj[xxArr[i]]  - yObj[yyArr[i]]), 2);
}
const denom = Math.pow(n, 3) -n;
if (n === 1) print(1);
 else print(1 - 6 * d / denom);