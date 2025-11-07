async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  try {
    const response = await fetch("https://your-backend-url.com/login", { // change this URL after deploying backend
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
      message.style.color = "green";
      message.textContent = "Login Successful ✅";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid Credentials ❌";
    }
  } catch (error) {
    message.style.color = "red";
    message.textContent = "Server error!";
  }
}
