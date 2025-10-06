let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

homeScoreEl.textContent = 0;
guestScoreEl.textContent = 0;

function homeOnePoint () {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 1;
}

function homeTwoPoints() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
}
function homeThreePoints() {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
}

function guestOnePoint () {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 1;
}

function guestTwoPoints() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
}
function guestThreePoints() {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
}