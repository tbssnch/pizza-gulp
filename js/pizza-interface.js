var Pizza = require('./../js/pizza.js').pizzaModule;

$(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();
    var inputSize = $("#pizza-size").val();
    var inputToppingDelivery = [];
    $("input:checked").each(function() {
      inputToppingDelivery.push(parseInt($(this).val()));
    });

    var pizzaOrder = new Pizza(inputSize, inputToppingDelivery);

    var newSizePrice = pizzaOrder.sizePrice();
    var newToppingDeliveryPrice = pizzaOrder.pizzaExtraPrice();
    var grandTotal = newSizePrice + newToppingDeliveryPrice;

    // $("#order-form-div").slideToggle();
    // $("#final-price-div").slideToggle();

    $("#final-price").text("");
    $("#final-price").append("<p> Your total will be $" + grandTotal + ".</p>");
    console.log(pizzaOrder);
  });

  $("#place-order").click(function(){
    resetFields();
    // $("#final-price-div").slideToggle();
    // $("#drone-div").slideToggle();
  });
});
