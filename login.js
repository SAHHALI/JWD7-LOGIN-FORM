const correctEmail = "jwd@gmail.com";
const correctPassword = "1234";

const messageContainer = document.getElementById("message-container");

function cekLogin(){
  const userEmail = document.getElementById('fEmail').value;
  const userPassword = document.getElementById('fPassword').value;
  // alert(userEmail);

  if ((userEmail != correctEmail) || (userPassword != correctPassword)){
    messageContainer.innerHTML = "<p class='error-message'> Login Gagal,Email atau Password salah !</p>";
  } else{
    messageContainer.innerHTML = "<p class='succes-message'>Login Berhasil!</p>";
  }
}

