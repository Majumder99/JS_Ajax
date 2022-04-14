document.getElementById("button").addEventListener("click", loadUsers);

//Load github users
function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);

  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = "";
      users.forEach((ele) => {
        output += `<div class = "users"><img src="${ele.avatar_url}" width = "70" height="70">
        <ul>
        <li>ID : ${ele.id}</li>
        <li>Name : ${ele.login}</li>
        <li>Email: ${ele.url}</li>
        </ul></div>`;
      });
      document.getElementById("users").innerHTML = output;
    }
  };
  xhr.send();
}
