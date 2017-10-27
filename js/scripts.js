function translator(number) {
  var numberArray = [];
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      numberArray.push(" " + "I'm sorry, Dave. I'm afraid I can't do that.")
    } else {
      numberArray.push(" " + i);
    }

    }
    return numberArray
}




$(function() {
  $("form").click(function(event) {
    event.preventDefault();
    $("#output").text(translator(parseInt($("#userinput").val())));
  });
});
