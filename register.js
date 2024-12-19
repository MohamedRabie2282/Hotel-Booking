document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("All fields are required.");
        return;
    }

   
    const users = JSON.parse(localStorage.getItem("users")) || []; 
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert("This email is already registered.");
    } else {
        users.push({ email, password }); 
        localStorage.setItem("users", JSON.stringify(users)); 
        alert("Registration successful!");
        window.location.href = "main.html";
    }
});
