//Business Logic
function Pizza(size, toppings) {
  this.newSize = size;
  this.newToppings = toppings;
}

Pizza.prototype.calculatePrice = function(newPizza) {
  var price = this.newToppings;
  var small = 7;
  var medium = 12;
  var large = 16;
  if (this.newSize === "Small") {
    price += small;
  } else if (this.newSize ===  "Medium") {
    price = this.newToppings * 1.5;
    price += medium;
  } else {
    price = this.newToppings * 2;
    price += large;
  }
  return price;
}


//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var inputSize = $("select#size").val();
    var toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputToppings = parseInt($(this).val());
      toppingsArray.push(inputToppings);
    });

    var toppingsTotal = toppingsArray.reduce(function(a, b) {
      return a + b;
    }, 0);

    var newPizza = new Pizza(inputSize, toppingsTotal);

    newPizza.price = newPizza.calculatePrice(newPizza);

    $("div.show-confirmation").show();
    $("span.size").text(inputSize);
    $("span.toppings").text(toppingsTotal);
    $("span.price").text(newPizza.price);

  });
});
