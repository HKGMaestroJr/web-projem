let currentUser = "";
const potls = [];

function login() {
  const usernameInput = document.getElementById("username").value.trim();
  if(usernameInput === "") {
    alert("Lütfen kullanıcı adınızı girin!");
    return;
  }
  currentUser = usernameInput;
  document.getElementById("login-section").style.display = "none";
  document.getElementById("potl-section").style.display = "block";
  document.getElementById("user-display").innerText = currentUser;
}

function postPotl() {
  const potlInput = document.getElementById("potl-input").value.trim();
  if(potlInput === "") {
    alert("Potl boş olamaz!");
    return;
  }

  const potlObj = {
    user: currentUser,
    content: potlInput,
    time: new Date().toLocaleTimeString()
  };

  potls.unshift(potlObj);
  renderPotls();
  document.getElementById("potl-input").value = "";
}

function renderPotls() {
  const potlList = document.getElementById("potl-list");
  potlList.innerHTML = "";

  potls.forEach(potl => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>@${potl.user}</strong> <span style="font-size:0.8em;color:#ddd;">(${potl.time})</span><br>${potl.content}`;
    li.style.background = `linear-gradient(135deg, #b39ddb, #9575cd)`;
    li.style.color = "#fff";
    li.style.padding = "10px";
    li.style.borderRadius = "8px";
    li.style.marginBottom = "10px";
    potlList.appendChild(li);
  });
}
