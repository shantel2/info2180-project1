/* Add your JavaScript to this file */

window.onload = function()
{
    buttons = document.getElementsByClassName("btn"); /*gets all the button classes */
    formButton = buttons[1];

    formButton.addEventListener("click", clickListner);
    email =  document.getElementById("email");

    message = document.getElementsByClassName("message")[0];
    console.log(message);

    function clickListner(e){
        e.preventDefault();
        if(email.value != ""){
            message.innerHTML = "Thank you! your email address " + email.value + " has been added to our mailing list" ;
            email.value = "";
        }
        else{
            message.innerHTML = "Please enter a valid email address";
            email.value = "";
        }
    }

}