let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});


function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    // At least 8 characters, one uppercase, one lowercase, one number, one special character
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;

}




document.getElementById("RegistationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Form submission logic here

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();  
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    const message = document.getElementById("formMessage");

    if(!username || !email || !password || !confirmPassword) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return false;
    }

     if (username.length < 3) {
        message.textContent = "Username must be at least 3 characters.";
        message.style.color = "red";
        return false;
      }

    if(!validateEmail(email)) {
        message.textContent = "Invalid email format.";
        message.style.color = "red";
        return false;  
    
    }

    if(!validatePassword(password)) {
        message.textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
        message.style.color = "red";
        return false;   
    }

    if(!passwordsMatch(password, confirmPassword)) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return false;       
    }
    message.textContent = "Registration successful!";
    message.style.color = "green";

});


document.getElementById("themeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});