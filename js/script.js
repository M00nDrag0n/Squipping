$(document).ready(function() {
  getInputs("Sq", 5);

  getInputs("F-E",6);
});


function getInputs(creature, listCount){
  $("#form-" + creature).submit(function(event) {
    event.preventDefault();

    var inputNums = [];
    for(var i=1; i<=listCount;i++){
      inputNums.push(i);
    }
    var items =[];
    inputNums.forEach(function(num){
      items.push($("#item"+num+"-"+creature).val().toUpperCase());
    });
    items.sort();

    items.forEach(function(item){
      $(".receipt-"+creature).append("<li>"+item+"</li>");
    });
  });
}
