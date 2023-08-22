module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  let stack = [];
  

  bracketsConfig.forEach(element => {
    open.push(element[0]);
    close[element[1]] = element[0];
  })

  for (let i = 0; i < str.length; i++) {
      let currentStr = str[i];
      let currentStack = stack[stack.length - 1];

      if (currentStr === close[currentStr] && currentStack === currentStr) {
          stack.pop();
      } else if (open.includes(currentStr)) {
          stack.push(currentStr);
      } else {
          if (stack.length === 0){
              return false;
          }
          if (currentStack === close[currentStr]) {
              stack.pop();
          } else {
              return false;
          }
      }
  }
  return stack.length === 0;
}