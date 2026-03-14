const form = document.getElementById("contact-form");

const scriptURL="https://script.google.com/macros/s/AKfycbzJEO7ndddwXSYqO_ivWDDoiZvjkw_d45NqSdR9V7LT6qte3swU73c7ZPQUHD0WogSv/exec";

form.addEventListener("submit",function(e){

e.preventDefault();

fetch(scriptURL,{
method:"POST",
body:new FormData(form)
})
.then(res=>res.json())
.then(data=>{

document.getElementById("popup").style.display="flex";

form.reset();

})
.catch(error=>{

alert("Error sending message");

})

});

function closePopup(){

document.getElementById("popup").style.display="none";

}



