document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var balanceMessage = document.getElementById("balance");

    if (username === "نوبارا") {
        balanceMessage.textContent = "m1رصيدك هو: ";
    } else {
        balanceMessage.textContent = "رصيدك هو: 0";
    }
   
    if (username ==="كاراسو") {
        balanceMessage.textContent = "m1رصيدك هو: ";
    }
    if (username ==="ايتاشي") {
        balanceMessage.textContent = "m1رصيدك هو: ";
    }
    if (username ==="لوفي") {
        balanceMessage.textContent = "m1رصيدك هو: ";
    }
    if (username ==="يورتشي") {
        balanceMessage.textContent = "m1رصيدك هو: ";
    }
    if (username ==="يوتا") {
        balanceMessage.textContent = "m1رصيدك هو: ";
    }
    if (username ==="شادو") {
        balanceMessage.textContent = "m1رصيدك هو: ";
    }
    if (username ==="ناروتو") {
        balanceMessage.textContent = "مرحبا ناروتو اموالك لا محدود ";
    }
    if (username ==="لاو") {
        balanceMessage.textContent = "مرحبا لاو اموالك لا محدود ";
    }
    if (username ==="رين") {
        balanceMessage.textContent = "انت تعرف ان اموالك لا محدود ";
    }
    if (username ==="كاكاشي") {
        balanceMessage.textContent = "انقلع اموالك لا محدود ";
    }
    if (username ==="ناغي") {
        balanceMessage.textContent = "وش تبي اموالك لا محدود ";
    }
    if (username ==="الوكا") {
        balanceMessage.textContent = "وش تبي اموالك لا محدود ";
    }
    if (username ==="بياكويا") {
        balanceMessage.textContent = "وش تبي اموالك لا محدود ";
    }
    if (username ==="ميامورا") {
        balanceMessage.textContent = "وش تبي اموالك لا محدود ";
    }
    if (username ==="سابو") {
        balanceMessage.textContent = "هطف انقلع ";
    }  
});