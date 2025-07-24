let fullNameInput = document.getElementById("fullName");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let positionInput = document.getElementById("position");
let avatarInput = document.getElementById("avatar");
let card = document.getElementById("card");
let userImage = document.getElementById("userImage");
let userName = document.getElementById("userName");
let userAge = document.getElementById("userAge");
let userEmail = document.getElementById("userEmail");
let userPosition = document.getElementById("userPosition");
function showUserCard() {
  userName.textContent = fullNameInput.value;
  userAge.textContent = "Age: " + ageInput.value;
  userEmail.textContent = "Email: " + emailInput.value;
  userPosition.textContent = "Position: " + positionInput.value;
  let file = avatarInput.files[0];
  let reader = new FileReader();
  reader.onload = function (e) {
    userImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
  card.style.display = "block";
}
