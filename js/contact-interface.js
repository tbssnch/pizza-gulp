var Contact = require('./../js/contact.js').contactModule;


function resetFields() {
    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
    $("input#zip").val("");
    $("input#email").val("");
    $("form#pizza-order").val("");
    $("#pizza-size").val("");
    $("input:checkbox").prop("checked", false);
}

//front end
$(function(){
  $("#place-order-button").click(function(){
    // $("#drone-div").slideToggle();
    // $("#contact-div").slideToggle();
  });

  $("form#contact-input").submit(function(event){
    event.preventDefault();
    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedStreet = $("input#street").val();
    var inputtedCity = $("input#city").val();
    var inputtedState = $("input#state").val();
    var inputtedZipcode = $("input#zip").val();
    var inputtedEmail = $("input#email").val();
    var contact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState, inputtedZipcode, inputtedEmail);

    var newName = contact.fullName();
    var newAddress = contact.fullAddress();
    var newEmail = contact.fullEmail();
    var newContact = newName + " " + newAddress + " " + newEmail;

    $("#final-price").append(newContact);

    // $("#contact-div").slideToggle();
    // $("#order-form-div").slideToggle();
    console.log(newContact);
  });

});
