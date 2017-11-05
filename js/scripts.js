function userinput(inputNumber){
  var latteArray = [];
  for (var i = 0; i <= inputNumber; i++) {
    if (1 === 0) {
      latteArray.push(i);
    } else if (i % 3 === 0) {
      latteArray.push("pumpkin");
    } else {
      latteArray.push(i);
    }
  }
  return latteArray;
}
