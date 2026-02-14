document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to City Hospital");

    const section = document.querySelector("section");

    const btn = document.createElement("button");
    btn.innerText = "Book Appointment";
    btn.style.padding = "10px";
    btn.style.marginTop = "20px";

    btn.onclick = function () {
        alert("Appointment booking coming soon!");
    };

    section.appendChild(btn);
});

