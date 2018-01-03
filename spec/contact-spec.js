var Contact = require('./../js/contact.js').contactModule;

describe('FullName', function() {
  it('should test whether user first and last name create full name', function(){
    var newContact = new Contact("John", "Sawiris");
    expect(newContact.fullName()).toEqual("John Sawiris");
  });
});

// var Calculator = require('./../js/pingpong.js').calculatorModule;
//
// describe('Calculator', function() {
//   it('should test whether number count starts at 1 to ping', function(){
//     var calcu = new Calculator();
//     expect(calcu.pingPong(3)).toEqual([1, 2, 'ping']);
//   });
// 
//   it('should test whether number count starts at 1 to pong', function(){
//     var calcu = new Calculator();
//     expect(calcu.pingPong(5)).toEqual([1, 2, 'ping', 4, 'pong']);
//   });
// });
