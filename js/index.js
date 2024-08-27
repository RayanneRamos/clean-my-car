function createAccount() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    alert("The email is in the wrong format.");
    return;
  }

  if (email.length === "" || email.length === 0) {
    alert("The email is wrong.");
    return;
  }

  if (password.length < 6) {
    alert("The password field must contain more than 6 characters.");
    return;
  }

  let logins = JSON.parse(localStorage.getItem("logins")) || [];

  // Verificar se o email já está registrado
  if (logins.some((account) => account.email === email)) {
    alert("The email is already registered in our system.");
    return;
  }

  const newAccount = { email, password };
  logins.push(newAccount); // Adiciona a nova conta ao array de logins
  localStorage.setItem("logins", JSON.stringify(logins)); // Salva o array atualizado no localStorage

  alert("Account created successfully.");
}
