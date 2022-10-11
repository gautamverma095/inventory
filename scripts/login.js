let array = JSON.parse(localStorage.getItem("users")) || [];
console.log('array:', array)

let log = () => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  console.log(email, pass);
  if(checkUser(email, pass)=== true){
  localStorage.setItem("users", JSON.stringify(array));
  alert('Login successful!')
  
  }
  else if(checkUser(pass)=== false){
    alert('Wrong credentials')
  }
  else if(checkUser(email)=== false){
    alert("User doesn't exist, Sign Up")
  }
};

function checkUser(email, pass) {
  let filtered = array.filter(({Email,Password}) => {
    return Email === email && Password === pass;
  });
  if (filtered.length > 0) {
    return true;
  } else {
    return false;
  }
}