let array = JSON.parse(localStorage.getItem("users")) || [];

let sign = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
//   console.log(name, email, password);

  let p1 = new person(name, email, password);
//   console.log(p1);
  if(checkEmail(p1.email) === true){
    array.push(p1);
    localStorage.setItem("users", JSON.stringify(array));
    alert("signUp sucessfully");
    window.location.href = "./login.html";
  }
  else{
    alert('account already exists');
  }
  
};

function person(n, e, w) {
  this.Name = n;
  this.Email = e;
  this.Password = w;
}

function checkEmail(email) {
  let filtered = array.filter(({Email}) => {
//   console.log('Email:', Email)

    return Email === email;
  });

  if (filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}