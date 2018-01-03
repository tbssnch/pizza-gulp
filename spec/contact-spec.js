var Contact = require('./../js/contact.js').contactModule;

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
