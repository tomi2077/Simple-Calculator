
function addNumber(char) {
    if (operator === null) {
      output.value = "";
    }
    function createFloat(numList) {
        let floatNum = parseFloat(numList.join(""));
        return floatNum;
      }
      
      let numberList = [];
      numberList.push(char)
    //   function addNumberToList(num) {
    //     numberList.push(num);
    //   }
      
    //   function clearNumberList() {
    //     numberList = [];
    //   }
      
      function getListAsFloat() {
        let floatNum = createFloat(numberList);
        return floatNum;
      } 

    // check if the output already contains a decimal point
    if (char === '.' && output.value.includes('.')) {
      return;
    }
    output.value += getListAsFloat();
  }