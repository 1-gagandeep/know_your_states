// List of states and their corresponding links
const statesWithLinks = [
    {name: "Andhra Pradesh", link: "andhra.html"},
    {name: "Arunachal Pradesh", link: "ap.html"},
    {name: "Assam", link: "assam.html"},
    {name: "Bihar", link: "bihar.html"},
    {name: "Chhattisgarh", link: "chhattisgarh.html"},
    {name: "Goa", link: "goa.html"},
    {name: "Gujarat", link: "gujrat.html"},
    {name: "Haryana", link: "haryana.html"},
    {name: "Himachal Pradesh", link: "himachal.html"},
    {name: "Jharkhand", link: "jharkhand.html"},
    {name: "Karnataka", link: "karnatak.html"},
    {name: "Kerala", link: "kerala.html"},
    {name: "Madhya Pradesh", link: "mp.html"},
    {name: "Maharashtra", link: "maha.html"},
    {name: "Manipur", link: "mani.html"},
    {name: "Meghalaya", link: "megha.html"},
    {name: "Mizoram", link: "mizo.html"},
    {name: "Nagaland", link: "naga.html"},
    {name: "Odisha", link: "odisha.html"},
    {name: "Punjab", link: "punjab.html"},
    {name: "Rajasthan", link: "rajashthan.html"},
    {name: "Sikkim", link: "sikkim.html"},
    {name: "Tamil Nadu", link: "tamil.html"},
    {name: "Telangana", link: "telangana.html"},
    {name: "Tripura", link: "tripura.html"},
    {name: "Uttarakhand", link: "uttarakhand.html"},
    {name: "Uttar Pradesh", link: "up.html"},
    {name: "West Bengal", link: "wb.html"},
    {name: "Andaman and Nicobar", link: "andman.html"},
    {name: "Chandigarh", link: "chandi.html"},
    {name: "Dadra and Nagar Haveli", link: "dadra.html"},
    {name: "Daman and Diu", link: "daman.html"},
    {name: "Delhi", link: "delhi.html"},
    {name: "Jammu and Kashmir", link: "Jammu.html"},
    {name: "Ladakh", link: "ladakh.html"},
    {name: "Lakshadweep", link: "laksh.html"},
    {name: "Puducherry", link: "pondi.html"}
];

// Function to show suggestions based on user input
function showSuggestions() {
    const input = document.getElementById('stateInput').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestionsBox');
    suggestionsBox.innerHTML = '';  

    if (input.length === 0) {
        suggestionsBox.style.display = 'none';  
        return;
    }

    const filteredStates = statesWithLinks.filter(state => state.name.toLowerCase().includes(input));
    
    if (filteredStates.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }

    suggestionsBox.style.display = 'block';  

    
    filteredStates.forEach(state => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.innerHTML = `<a href="${state.link}">${state.name}</a>`;  
        suggestionDiv.onclick = () => selectState(state);  
        suggestionsBox.appendChild(suggestionDiv);
    });
}

// Function to handle suggestion click
function selectState(state) {
    document.getElementById('stateInput').value = state.name;  
    document.getElementById('suggestionsBox').style.display = 'none';  
    window.location.href = state.link;  
}

// Form validation
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false; 
    }
    emailError.textContent = ""; 
    return true; 
}

// Changing modes
let modeBtn = document.querySelector("#mode");
let body = document.querySelector(".content");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }

    else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});