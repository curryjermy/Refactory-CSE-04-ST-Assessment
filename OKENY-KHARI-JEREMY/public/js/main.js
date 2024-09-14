document.querySelector(".flight-form").addEventListener("submit", (event)=> {
    event.preventDefault();
    const name = document.getElementById("fullname").value;
    const gender = document.getElementById("gender").value;
    const dateOfBirth = document.getElementById("dateofbirth").value;
    const nationality = document.getElementById("nationality").value;
    const phoneNumber = document.getElementById("contact").value;
    const emailAddress = document.getElementById("email").value;
    const poboxNumber = document.getElementById("poboxnumber").value;
    const emergencyPhoneNumber = document.getElementById("emergencycontact").value;
    const passportNumber = document.getElementById("passportnumber").value;
    const visaDocument = document.getElementById("visa").value;
    const departureCity = document.getElementById("departure").value;
    const destinationCity = document.getElementById("destination").value;

    if (!name){
        alert("name is required")
        return;
    }
    if (!gender){
        alert("gender is required")
        return;
    }
    if (!dateOfBirth){
        alert("date of birth is required")
        return;
    }
    if (!nationality){
        alert("nationality is required")
        return;
    }
    if (!phoneNumber){
        alert("contact is required")
        return;
    }
    if (!emailAddress){
        alert("email is required")
        return;
    }
    if (!poboxNumber){
        alert("pobox is required")
        return;
    }
    if (!emergencyPhoneNumber){
        alert("emergency contact is required")
        return;
    }
    if (!passportNumber){
        alert("passport number is required")
        return;
    }
    if (!visaDocument){
        alert("visa paperwork is required")
        return;
    }
    if (!departureCity){
        alert("departure city is required")
        return;
    }
    if (!destinationCity){
        alert("city of arrival is required")
        return;
    }
    alert("Form has been submitted successfully");
    this.reset();
})