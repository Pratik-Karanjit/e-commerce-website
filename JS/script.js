function validateForm() {
    var firstName = document.forms["feedback"]["fname"].value;
    var lastName = document.forms["feedback"]["lname"].value;
    var genderDetails = document.forms["feedback"]["genders"].value;
    var mail = document.forms["feedback"]["email"].value;
    var phoneNumberDetails = document.forms["feedback"]["phoneNumber"].value;
    var feedbackDetails = document.forms["feedback"]["feedback"].value;

    if (firstName != "") {
      if (lastName != "") {
        if (mail != "") {
          if (phoneNumberDetails != "") {
            if (feedbackDetails != "") {
              alert("Thank You.")
            }
          }
          else {
            alert("Please fill out your phone number.")
          }
        }
        else {
          alert("Please enter your email.")
        }
      }
      else {
        alert("Please enter your full name")
      }
    }
    else {
      alert("Please enter your full name")
    }
  }