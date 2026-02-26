// Password (change if you want)
const correctPassword = "ananya123";

// Check Password
function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === correctPassword) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("diaryApp").classList.remove("hidden");
    } else {
        alert("Wrong password 😅");
    }
}

// Show Current Date
const today = new Date();
const formattedDate = today.toDateString();
document.getElementById("currentDate").innerText = "📅 " + formattedDate;

// Save Entry
function saveEntry() {
    const text = document.getElementById("diaryText").value.trim();
    if (text === "") {
        alert("Kuch toh likho yaar ✍️");
        return;
    }

    const entryData = {
        date: formattedDate,
        content: text
    };

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    entries.push(entryData);
    localStorage.setItem("diaryEntries", JSON.stringify(entries));

    document.getElementById("diaryText").value = "";
    loadEntries();
}

// Load Entries
function loadEntries() {
    const entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = "";

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    entries.reverse().forEach(entry => {
        const div = document.createElement("div");
        div.classList.add("entry");
        div.innerHTML = `<strong>${entry.date}</strong><br>${entry.content}`;
        entriesDiv.appendChild(div);
    });
}

loadEntries();

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}