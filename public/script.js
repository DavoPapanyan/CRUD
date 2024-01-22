// var btn = document.getElementById("SubmitBtn");

// btn.addEventListener("click", HandelClick);

// function HandelClick(){
//     let nameInput = document.getElementById("name");
//     let ageInput = document.getElementById("age");

//     console.log(nameInput.value, ageInput.value);
// }

    let nameInput = document.getElementById("name").value
    let passwordInput = document.getElementById("password").value
    let emailInput = document.getElementById("email").value



    function SendData(){

    var response = fetch('http://localhost:3000/addName', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name : nameInput, password : passwordInput, email : emailInput})
    });
}