var Contact = require('./../js/contact.js').contactModule;
var Pizza = require('./../js/pizza.js').pizzaModule;

describe('fullName', function() {
  it('should test whether user first and last name create full name', function(){
    var newContact = new Contact("John", "Sawiris");
    expect(newContact.fullName()).toEqual("John Sawiris");
  });
});

describe('fullAddress', function() {
  it('should test whether user street, city, and state create the full address', function(){
    var newAddress = new Contact("Tyler", "Bu", "1234 SW Washington", "Portland", "Oregon", "97214");
    expect(newAddress.fullAddress()).toEqual("1234 SW Washington Portland, Oregon 97214");
  });
});

describe('pizzaSize', function() {
  it('should test if pizza small size returns 14', function(){
    var smallPizza = new Pizza("large", 0);
    expect(smallPizza.sizePrice()).toEqual(18);
  });
});

describe('pizzaDelivery', function() {
  it('should test if toppings adds up', function(){
    var deliverPizza = new Pizza("small", [4, 4]);
    expect(deliverPizza.pizzaExtraPrice()).toEqual(8);
    expect(deliverPizza.pizzaExtraPrice()).not.toEqual(16);
  });
});
