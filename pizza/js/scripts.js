//Business Logic
function Pizza(size, toppings) {
  this.newSize = size;
  this.newToppings = toppings;
}

Pizza.prototype.calculatePrice = function(newPizza) {
  var price = this.newToppings.length;
  var small = 7;
  var medium = 12;
  var large = 16;
  if (this.newSize === "Small") {
    price += small;
  } else if (this.newSize ===  "Medium") {
    price = this.newToppings.length * 1.5;
    price += medium;
  } else {
    price = this.newToppings.length * 2;
    price += large;
  }
  return price;
}

Pizza.prototype.countToppings = function(newPizza) {
  if (this.newSize === "Small" || this.newSize === "Medium" || this.newSize === "Large" && this.newToppings === 0) {
    return "Cheese";
  } else {
    return this.newToppings;
  }
}

//User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var inputSize = $("select#size").val();
    var toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputToppings = $(this).val();
      toppingsArray.push(inputToppings);
    });

    var newPizza = new Pizza(inputSize, toppingsArray);

    newPizza.price = newPizza.calculatePrice(newPizza);
    newPizza.toppings = newPizza.countToppings(newPizza);

    $("div.show-confirmation").show();
    $("span.size").text(inputSize);
    $("span.toppings").text(newPizza.toppings);
    $("span.price").text(newPizza.price);
  });
});
