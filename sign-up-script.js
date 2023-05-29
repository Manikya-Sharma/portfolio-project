const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const myEmail = "teamBeta.roundTable@gmail.com";

const btn = document.querySelector("#submit-button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  console.log(
    `mailto:${myEmail}?subject=Interested%20in%20working%20together&body=Hi!%20${name}%20this%20side.%20${
      message + "%0AFeel%20free%20to%20contact%20me%20at%20" + email
    }`
  );
  window.open(
    `mailto:${myEmail}?subject=Interested%20in%20working%20together&body=Hi!%20${name}%20this%20side.%20${
      message + "%0A%0D%20Feel%20free%20to%20contact%20me%20at%20" + email
    }`
  );
  document.querySelector("form").remove();
  document.querySelector("#main-heading").textContent =
    "Thank you for reaching out! I will reach back to you soon";
});
