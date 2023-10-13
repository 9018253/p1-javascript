
const budget = parseInt(document.getElementById("budgetInfo").textContent);
const product = parseInt(document.getElementById("productInfo").textContent);


if (budget >= product) {
   
    document.getElementById("result").textContent = "U heeft genoeg geld!";
    document.getElementById("result").classList.add("green");
} else {
    
    document.getElementById("result").textContent = "Helaas, te weinig geld.";
    document.getElementById("result").classList.add("red");
}