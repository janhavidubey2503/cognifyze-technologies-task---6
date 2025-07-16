function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorElement = document.getElementById("error");
  errorElement.innerText = "";

  // Name validation
  if (name === "") {
    errorElement.innerText = "Name is required!";
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    errorElement.innerText = "Email is required!";
    return false;
  } else if (!emailRegex.test(email)) {
    errorElement.innerText = "Please enter a valid email!";
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
