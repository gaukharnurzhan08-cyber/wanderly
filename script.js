const destinations = {

paris: {
title: "Paris 🇫🇷",
description: "Paris is famous for its romantic atmosphere, beautiful architecture, art and amazing food.",
time: "April – June or September – October",
budget: "Medium",
place: "Eiffel Tower 🗼"
},

tokyo: {
title: "Tokyo 🇯🇵",
description: "Tokyo combines futuristic technology with ancient traditions, colorful streets and incredible Japanese cuisine.",
time: "March – May or October – November",
budget: "Medium / High",
place: "Shibuya Crossing 🌃"
},

maldives: {
title: "Maldives 🇲🇻",
description: "The Maldives is a tropical paradise known for turquoise water, white beaches and beautiful islands.",
time: "November – April",
budget: "High",
place: "Malé and the coral islands 🏝️"
}

};

function showDestination(place) {

const destination = destinations[place];

document.getElementById("modalTitle").textContent = destination.title;
document.getElementById("modalDescription").textContent = destination.description;
document.getElementById("modalTime").textContent = destination.time;
document.getElementById("modalBudget").textContent = destination.budget;
document.getElementById("modalPlace").textContent = destination.place;

document.getElementById("destinationModal").style.display = "flex";
}

function closeModal() {

document.getElementById("destinationModal").style.display = "none";

}

window.onclick = function(event) {

const modal = document.getElementById("destinationModal");

if (event.target === modal) {
closeModal();
}

};
