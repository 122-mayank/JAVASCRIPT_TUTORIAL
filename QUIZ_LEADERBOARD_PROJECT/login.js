document.querySelector(".log-btn").addEventListener("click", async () => {
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  if (!email || !password) {
    alert("Please fill all fields.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
    } else {
      alert(data.message);
    }

  } catch (error) {
    alert("Server not responding. Please try again.");
    console.error(error); // shows exact error
  }
});
