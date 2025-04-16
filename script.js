const email = document.querySelector(".email");
const form = document.querySelector(".form");
const emailMessage = document.querySelector(".empty-email-message");
const errorEmail = document.querySelector(".invalid-email-message");

form.addEventListener("submit", (e) => {
  if (!email.value) {
    e.preventDefault();
    // setTimeout(() => {
    //   emailMessage.style.display = 'none';
    // }, 1000);
    emailMessage.textContent = "You must type in an email";
  } else {
    emailMessage.textContent = "";
    // return true;
  }
});

email.addEventListener("input", () => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
      errorEmail.textContent = "";
    } else {
      errorEmail.textContent = "Email is invalid";
      emailMessage.textContent = "";
    }
  } else {
    emailMessage.textContent = "You must type in an email";
    errorEmail.textContent = "";
  }
});
