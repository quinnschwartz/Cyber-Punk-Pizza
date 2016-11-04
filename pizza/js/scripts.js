//Business Logic
function Pizza(size) {
  this.newSize = size;
}

Pizza.prototype.calculatePrice = function(newPizza) {
  var price = 0;

  if (this.newSize === "Small (7 Dollars)") {
    price += 7;
  } else if (this.newSize ===  "Medium (12 Dollars)") {
    price += 12;
  } else {
    price += 15;
  }
  return price;
}







//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputSize = $("select#size").val();
    // $("input:checkbox[name=toppings]:checked").each(function(){
    //   var inputToppings = $(this).val();
    // });
    var newPizza = new Pizza(inputSize);
    newPizza.price = newPizza.calculatePrice(newPizza);

    $("div.show-confirmation").show();
    $("span.size").text(inputSize);
    $("span.price").text(newPizza.price);

  });
});
