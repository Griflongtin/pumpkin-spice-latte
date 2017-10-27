function translator(number) {
debugger
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      numberArray.push("<li>" + "I'm sorry <span>Dave</span>. I'm afraid I can't do that." + " </li> ");
    } else {
      numberArray.push("<li> " + i + "</li>");
    }
  }
  var beepNumber = numberArray.toString().replace(/1/g, "Beep!");
  var boopNumber = beepNumber.replace(/0/g, "Boop!");
  var outputNumber = boopNumber.replace(/,/g, "");

  return outputNumber
}



$(function() {
  $("button").click(function(event) {
    event.preventDefault();
    $('#output').empty();
    $("#output").append(translator(parseInt($("#userinput").val())));
  });
});
