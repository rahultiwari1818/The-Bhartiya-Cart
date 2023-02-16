function clearErrors() {
  errors = document.getElementsByClassName('formerror');
  for (item of errors) {
    item.innerHTML = "";
  }
}
function SignUpSub() {
  let passwd = document.forms['SignUpForm']['Pwd'].value;
  let Cpasswd = document.forms['SignUpForm']['Cpwd'].value;
  if (!(Cpasswd == passwd)) {
    let ele = document.getElementById("cpwd");
    ele.getElementsByClassName("formerror")[0].innerHTML="Password and Confirm Password does not match...!!";
    return false;
  }
  return true;;

}

function signUp() {
  let x = document.getElementById("main");
  x.innerHTML = `
  <div class="cont-form">
  <h2>Sign UP</h2>
  <form onsubmit="return SignUpSub()" name="SignUpForm" method="post">
    <div class="user-box" id="Name">
      <input type="text" name="FullName" required pattern="[A-Za-z\\s]*$" title="Name should contain Alphabets only.!">
      <label>FullName</label>
    </div>
    <div class="user-box" id="divUser">
      <input type="text" name="uname"  id="uname" required pattern="[A-Za-z0-9]+$" title="UserName should only have Alphabets and Numbers!! ex:abc12">
      <label>Username</label>
    </div>
    <div class="user-box" id="phno">
      <input type="tel" name="Phno" required  pattern=".{10}" title="Phone Number should contain 10 Digits.!">
      <label>PhoneNumber</label>
    </div>
    <div class="user-box" id="age">
      <input type="number" name="Age" required  pattern=".{1,}" title="Sorry!! You are Underage.!!!">
      <label>Age</label>
    </div>
    <div class="user-box" id="pwd">
      <input type="password" name="Pwd" required pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters">
      <label>Password</label>
    </div>
    <div class="user-box" id="cpwd">
      <input type="password" name="Cpwd" id="Cpwd" required title="">
      <label>Confirm Password</label>
      <b><span class="formerror"></span></b>
    </div>
    <center>
      <button type="submit" class="btn1">SignUp</button><br>
      <h4><u>or SignUp using</u></h4>
      <div class="d-flex justify-content-center">
        <h3> <a href="http://#" target="_blank" rel="noopener noreferrer"  class="icn"> <i
                class="fa-brands fa-facebook"></i></a></h3> &nbsp;&nbsp;
        <h3> <a href="http://#" target="_blank" rel="noopener noreferrer"  class="icn"><i
                class="fa-brands fa-google" style="--fa-secondary-color: red;"></i></a></h3>&nbsp;&nbsp;
        <h3><a href="http://#" target="_blank" rel="noopener noreferrer"  class="icn"><i
                class="fa-brands fa-twitter"></i></a></h3>
      </div>
    </center>
    <br>
    <h3>Already have an account</h3>
    <button onclick="login()" class="btn1-SL">Login<i class="fa-solid fa-arrow-right-to-bracket"></i></button>
  </form>
</div>
         `;
}
function login() {
  let x = document.getElementById("main");
  x.innerHTML = `
  <div class="cont-form">
        <h2>Login</h2>
        <form name="loginForm" method="post">
          <div class="user-box" id="divUser">
            <input type="text" name="uname"  id="uname" required pattern="[A-Za-z0-9]+$" title="UserName should only have Alphabets and Numbers!!">
            <label>Username</label>
          </div>
          <div class="user-box" id="divPass">
            <input type="password" name="passwd"  id="passwd" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters">
            <label>Password</label>
          </div>
          <center>
            <button type="submit" class="btn1">Login</button><br>
            <h4><u>or login using</u></h4>
            <div class="d-flex justify-content-center">
              <h3> <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"   class="icn"> <i
                      class="fa-brands fa-facebook"></i></a></h3> &nbsp;&nbsp;
              <h3> <a href="http://google.com" target="_blank" rel="noopener noreferrer"  class="icn"><i
                      class="fa-brands fa-google" style="--fa-secondary-color: red;"></i></a></h3>&nbsp;&nbsp;
              <h3><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"  class="icn"><i
                      class="fa-brands fa-twitter"></i></a></h3>
            </div>
          </center>
          <br>
          <h3>New user</h3>
          <button onclick="signUp()" class="btn1-SL">SignUp<i class="fa-solid fa-arrow-right-to-bracket"></i></button>
        </form>
      </div>
  ` ;
}