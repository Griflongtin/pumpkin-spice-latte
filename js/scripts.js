function translator(number) {
debugger
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      numberArray.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      numberArray.push(" " + i);
    }
  }
  var beepNumber = numberArray.toString().replace(/1/g, " " + "Beep!");
  var boopNumber = beepNumber.replace(/0/g, " " + "Boop!");

  return boopNumber
}



$(function() {
  $("button").click(function(event) {
    event.preventDefault();
    $("#output").text(translator(parseInt($("#userinput").val())));
  });
});
