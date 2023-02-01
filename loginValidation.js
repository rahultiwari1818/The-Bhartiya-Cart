function clearErrors() {
  errors = document.getElementsByClassName('formerror');
  for (item of errors) {
    item.innerHTML = "";
  }
}


function setError(id, error) {
  ele = document.getElementById(id);
  ele.getElementsByClassName('formerror')[0].innerHTML = error;
}

function LoginSub() {
  returnval = true;
  clearErrors();

  let uname = document.forms['loginForm']["uname"].value;
  let Upattern = /^[a-zA-z]+[0-9]+$/;
  if (!(uname.match(Upattern))) {
    setError("divUser", "UserName should only contains Alphabets and Numbers!!");
    returnval = false;
  }

  let passwd = document.forms['loginForm']["passwd"].value;
  if (passwd.length < 8) {
    setError("divPass", "Password length should be greater than 8!!");
    returnval = false;
  }
  return returnval;
}
function SignUpSub() {
  returnval = true;
  clearErrors();
  let name = document.forms['SignUpForm']['FullName'].value;
  let Npattern = /^[a-zA-Z]+[a-zA-Z]+$/;
  if (!(name.match(Npattern))) {
    setError("Name", 'Name should contain Alphabets only.!');
    returnval = false;
  }
  let phno = document.forms['SignUpForm']['Phno'].value;
  let PhPattern = /^\d{10}$/;
  if (!(phno.match(PhPattern))) {
    setError(phno, 'Phone Number should contain 10 Digits.!');
    returnval = false;
  }
  let age = document.forms['SignUpForm']['Age'].value;
  if (Number(age) < 14) {
    setError("Age", 'Sorry!! You are Underage.!!!');
    returnval = false;
  }
  let passwd = document.forms['SignUpForm']['Pwd'].value;
  if (!(passwd.length < 8 && (passwd.includes('@') || passwd.includes("#") || passwd.includes("_") || passwd.includes("-") || passwd.includes("!") || passwd.includes(".") || passwd.includes(",")) && (passwd.include[0 - 9]))) {
    setError('pwd', 'Password must conatins 8 letters includeing 1 special character and one digit');
    returnval = false;
  }
  let Cpasswd = document.forms['SignUpForm']['Cpwd'].value;
  if (!(Cpasswd === passwd)) {
    setError('cpwd', 'Confirm Password and Password should be Same!!');
    returnval = false;
  }
  return returnval;

}

function signUp() {
  let x = document.getElementById("main");
  x.innerHTML = `
         <div class="cont-form">
        <h2>Sign UP</h2>
        <form onsubmit="return SignUpSub()" name="SignUpForm" method="post">
          <div class="user-box" id="Name">
            <input type="text" name="FullName" required>
            <label>FullName</label>
            <b><span class="formerror"></span></b>
          </div>
          <div class="user-box" id="phno">
            <input type="number" name="Phno" required>
            <label>PhoneNumber</label>
            <b><span class="formerror"></span></b>
          </div>
          <div class="user-box" id="age">
            <input type="number" name="Age" required>
            <label>Age</label>
             <b><span class="formerror"></span></b>
          </div>
          <div class="user-box" id="pwd">
            <input type="password" name="Pwd" required>
            <b><span class="formerror"></span></b>
            <label>Password</label>
          </div>
          <div class="user-box" id="cpwd">
            <input type="password" name="Cpwd" required>
            <b><span class="formerror"></span></b>
            <label>Confirm Password</label>
          </div>
          <center>
         <button type="submit" class="btn1">SignUp</button><br>
         <h4><u>or SignUp using</u></h4>
         <div class="d-flex justify-content-center">
      <h3><button class="icn"> <a href="http://#" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook"></i></a></button></h3> &nbsp;&nbsp;
       <h3><button class="icn"> <a href="http://#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google" style="--fa-secondary-color: red;"></i></a></button></h3>&nbsp;&nbsp;
      <h3><button class="icn"><a href="http://#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a></button></h3>
    </div>
        </center>
        <br>
        <h3>Already have an account</h3> 
        <button onclick="login()" class="btn1-SL">Login<i class="fa-solid fa-arrow-right-to-bracket"></i></button>
        </form>
      </div>`;
}
function login() {
  let x = document.getElementById("main");
  x.innerHTML = `<div class="cont-form">
        <h2>Login</h2>
        <form  name="loginForm" onsubmit="return LoginSub()" method="post">
          <div class="user-box" id="divUser">
            <input type="text" name="uname" required id="uname">
            <label>Username</label>
            <b><span class="formerror"> </span></b>
          </div>
          <div class="user-box" id="divPass">
            <input type="password" name="passwd" required id="passwd">
            <label>Password</label>
            <b><span class="formerror"> </span></b>
          </div>
          <center>  
            <button type="submit" class="btn1">Login</button><br>
         <h4><u>or login using</u></h4>
         <div class="d-flex justify-content-center">
      <h3><button class="icn"> <a href="http://#" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook"></i></a></button></h3> &nbsp;&nbsp;
       <h3><button class="icn"> <a href="http://#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google" style="--fa-secondary-color: red;"></i></a></button></h3>&nbsp;&nbsp;
      <h3><button class="icn"><a href="http://#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a></button></h3>
    </div>
    </center>
        <br>
        <h3>New user</h3> 
        <button onclick="signUp()" class="btn1-SL">SignUp<i class="fa-solid fa-arrow-right-to-bracket"></i></button>
        </form>
      </div> ` ;
}