// This set is for the first div block that reverses your string.
const revBtn = document.getElementById("revBtn");
const normal = document.getElementById("normal");
const reverse = document.getElementById("reverse");

revBtn.addEventListener("click", (e) => {
    e.preventDefault();
    reverse.innerHTML = "";
    for (i = normal.value.length - 1; i >= 0; i--){
        reverse.innerHTML += normal.value[i];
    }
});

// This set is for the second div block that tells the user is their
//  number is a plaindrome.
const palBtn = document.getElementById("palBtn");
const palNum = document.getElementById("palNum");
const isPal = document.getElementById("isPal");

palBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isPal.innerHTML = "";
    let pal = "";
    for (i = palNum.value.length - 1; i >= 0; i--){
        pal += palNum.value[i];
    }
    if (pal == palNum.value){
        isPal.innerHTML = "It is a palindrome!";
    }
    else{
        isPal.innerHTML = "It is not a palindrome!";
    }
});

// This set is for the third div block that lets the user put in the subtotal
//  and % tip, then calculates and displays the total.
const totalBtn = document.getElementById("totalBtn");
const subtotal = document.getElementById("subtotal");
const tip = document.getElementById("tip");
const total = document.getElementById("total");

totalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    total.innerHTML = "$" + (parseFloat(subtotal.value) + (parseFloat(subtotal.value) * (parseFloat(tip.value)/100))).toFixed(2);
});
