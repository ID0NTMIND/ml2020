const cft = readline().split(" ").map(function(x) { return parseInt(x); });
const num = readline().split(" ").map(function(x) { return parseInt(x); });
const k = cft[1];
const sortedIndex = num.map((elem,i) => i)
.sort((a, b) => num[a] - num[b]);
const tmp = sortedIndex.reduce((acc, elem, i) => {
  const index = i + 1;
  const tmp = index % k;
  if (tmp === 0) {
    if(typeof acc[k] == 'undefined') acc[k] = [];
    acc[k].push(elem + 1);
  } else {
    if(typeof acc[tmp]== 'undefined') acc[tmp] = [];
    acc[tmp].push(elem + 1);
  }
  return acc;
},[]);
for(var i = 1; i <= k; i += 1)
  print(`${tmp[i].length} ${tmp[i].join(' ')}`);