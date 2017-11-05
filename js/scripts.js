function userInput(inputNumber){
  var latteArray = [];
  for (var i = 0; i <= inputNumber; i++) {
    if (i === 0) {
      latteArray.push(i);
    } else if (i % 12 === 0) {
      latteArray.push("latte");
    } else if (i % 4 === 0) {
      latteArray.push("spice");
    } else if (i % 3 === 0) {
      latteArray.push("pumpkin");
    } else {
      latteArray.push(i);
    }
  }
  return latteArray;
}
