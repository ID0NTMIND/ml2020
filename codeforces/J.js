const n = 5;
const array = [
          [1, 16],
          [2, 25],
          [3, 1],
          [4, 4],
          [5, 9]
];
const yObj = {};
const xObj = {};
const xxArr = array.map((elem) => elem[0]);
const yyArr = array.map((elem) => elem[1]);
const xArr = array.map((elem,i) => [elem[0]]).sort((a,b)=>a[0] - b[0]).map((elem,i) => {
xObj[elem[0]] = i + 1;
return elem[0];
})
const yArr = array.map((elem,i) => [elem[1],i + 1]).sort((a, b)=> a[0] - b[0]).map((elem,i) => {
yObj[elem[0]] = i+1;
return elem[0];
});
var d = 0;
for (var i = 0; i < n; i += 1){
  d = d + ((xObj[xxArr[i]])  - (yObj[yyArr[i]]))**2;
}
const niz = n**3 -n;
if (n === 1) console.log(1) 
 else console.log(1 - 6*d/niz);
