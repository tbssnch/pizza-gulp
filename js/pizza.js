

function Pizza(size, topping,){
  this.size = size;
  this.topping = topping;
  this.sizePrice();
  this.toppingDeliveryPrice();
}

Pizza.prototype.sizePrice = function () {
  if (this.size === "empty") {
    alert("Please enter a pizza size!!!");
  } else if (this.size === "small"){
    return 14;
  } else if (this.size === "medium"){
    return 16;
  } else if (this.size === "large")
    return 18;
};

Pizza.prototype.toppingDeliveryPrice = function () {
  var total = 0;
  for (var i = 0; i < this.topping.length; i++) {
    total += this.topping[i] <<0;
  }
  return total
};
exports.pizzaModule = Pizza;
