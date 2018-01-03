
function Contact(first, last, street, city, state, zipcode, email) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
  this.email = email;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.fullAddress = function () {
  return this.street + " " + this.city + ", " + this.state + " " + this.zipcode;
}

Contact.prototype.fullEmail = function () {
  return this.email;
}


exports.contactModule = Contact;
