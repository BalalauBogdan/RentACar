// Contact Information Cards
const contactInfo = [
  {
    title: "Visit Us",
    details: ["Brasovului 7", "Targu Mures, Mures", "Romania"],
  },
  {
    title: "Call Us",
    details: ["+40 747 011 754", "+40 747 011 755", "Mon - Sun: 08:00 - 16:00"],
  },
  {
    title: "Email Us",
    details: ["info@rentacar.ro", "support@rentacar.ro", "booking@rentacar.ro"],
  },
];

const infoCards = document.getElementById("infoCards");

contactInfo.forEach((info) => {
  const card = document.createElement("div");
  card.className = "info-card";

  card.innerHTML = `
    <h3 class="info-title">${info.title}</h3>
    <div class="info-details">
      ${info.details.map((d) => `<p>${d}</p>`).join("")}
    </div>
  `;

  infoCards.appendChild(card);
});

// Form Validation
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

// Validation Functions
function validateName() {
  const name = nameInput.value.trim();

  if (name === "") {
    showError(nameInput, nameError, "Name is required");
    return false;
  }

  if (name.length < 2) {
    showError(nameInput, nameError, "Name must be at least 2 characters");
    return false;
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    showError(nameInput, nameError, "Name can only contain letters and spaces");
    return false;
  }

  clearError(nameInput, nameError);
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();

  if (email === "") {
    showError(emailInput, emailError, "Email is required");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError(emailInput, emailError, "Please enter a valid email address");
    return false;
  }

  clearError(emailInput, emailError);
  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();

  // Phone is optional, so if empty, it's valid
  if (phone === "") {
    clearError(phoneInput, phoneError);
    return true;
  }

  // Remove spaces and dashes for validation
  const cleanPhone = phone.replace(/[\s\-]/g, "");

  if (!/^\+?[\d]{10,15}$/.test(cleanPhone)) {
    showError(
      phoneInput,
      phoneError,
      "Please enter a valid phone number (10-15 digits)"
    );
    return false;
  }

  clearError(phoneInput, phoneError);
  return true;
}

function validateSubject() {
  const subject = subjectInput.value.trim();

  if (subject === "") {
    showError(subjectInput, subjectError, "Subject is required");
    return false;
  }

  if (subject.length < 5) {
    showError(
      subjectInput,
      subjectError,
      "Subject must be at least 5 characters"
    );
    return false;
  }

  clearError(subjectInput, subjectError);
  return true;
}

function validateMessage() {
  const message = messageInput.value.trim();

  if (message === "") {
    showError(messageInput, messageError, "Message is required");
    return false;
  }

  if (message.length < 10) {
    showError(
      messageInput,
      messageError,
      "Message must be at least 10 characters"
    );
    return false;
  }

  if (message.length > 1000) {
    showError(
      messageInput,
      messageError,
      "Message must not exceed 1000 characters"
    );
    return false;
  }

  clearError(messageInput, messageError);
  return true;
}

function showError(input, errorElement, message) {
  input.classList.add("error");
  errorElement.textContent = message;
}

function clearError(input, errorElement) {
  input.classList.remove("error");
  errorElement.textContent = "";
}

// Real-time validation
nameInput.addEventListener("blur", validateName);
nameInput.addEventListener("input", () => {
  if (nameInput.classList.contains("error")) {
    validateName();
  }
});

emailInput.addEventListener("blur", validateEmail);
emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("error")) {
    validateEmail();
  }
});

phoneInput.addEventListener("blur", validatePhone);
phoneInput.addEventListener("input", () => {
  if (phoneInput.classList.contains("error")) {
    validatePhone();
  }
});

subjectInput.addEventListener("blur", validateSubject);
subjectInput.addEventListener("input", () => {
  if (subjectInput.classList.contains("error")) {
    validateSubject();
  }
});

messageInput.addEventListener("blur", validateMessage);
messageInput.addEventListener("input", () => {
  if (messageInput.classList.contains("error")) {
    validateMessage();
  }
});

// Form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isSubjectValid = validateSubject();
  const isMessageValid = validateMessage();

  // If all validations pass
  if (
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isSubjectValid &&
    isMessageValid
  ) {
    // Show success message
    successMessage.textContent =
      "Thank you! Your message has been sent successfully. We will get back to you soon.";
    successMessage.classList.add("show");

    // Reset form
    contactForm.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 5000);
  } else {
    // Scroll to first error
    const firstError = document.querySelector(
      ".form-input.error, .form-textarea.error"
    );
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});
