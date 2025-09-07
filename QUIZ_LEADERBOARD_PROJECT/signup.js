document.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".sign-btn").addEventListener('click', async () => {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Please fill all the fields!!");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5500/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup Successful!!");
        window.location.href = 'login.html';
      } else {
        alert(data.message || 'Signup failed');
      }

    } catch (error) {
      alert('Server error');
      console.error(error);
    }
  });
});
