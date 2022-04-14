document.getElementById("button1").addEventListener("click", loadUser);
document.getElementById("button2").addEventListener("click", loadUsers);

function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      //   console.log(this.responseText);
      var user = JSON.parse(this.responseText);
      // console.log(user.name);
      var output = "";
      output += `<ul>
      <li>ID : ${user.id}</li>
      <li>Name : ${user.name}</li>
      <li>Email: ${user.email}</li>
      </ul>`;

      document.getElementById("user").innerHTML = output;
    }
  };
  xhr.send();
}

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      //   console.log(this.responseText);
      var users = JSON.parse(this.responseText);
      // console.log(user.name);
      var output2 = "";

      // for (var i = 0; i < users.length; i++) {
      //   output2 +=
      //     `<ul>
      // <li>ID : ${users[i].id}</li>
      // <li>Name : ${users[i].name}</li>
      // <li>Email: ${users[i].email}</li>
      // </ul>` + "<br>";
      // }

      users.forEach((ele) => {
        output2 +=
          `<ul>
      <li>ID : ${ele.id}</li>
      <li>Name : ${ele.name}</li>
      <li>Email: ${ele.email}</li>
      </ul>` + "<br>";
      });
      document.getElementById("users").innerHTML = output2;
    }
  };
  xhr.send();
}
