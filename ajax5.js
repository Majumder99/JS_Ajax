document.getElementById("button1").addEventListener("click", loadUsers);

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "users.php", true);
  xhr.onload = function () {
    if (this.status == 200) {
      //   console.log(this.responseText);
      var users = JSON.parse(this.responseText);
      // console.log(user.name);
      var output2 = "";

      users.forEach((ele) => {
        output2 +=
          `<ul>
      <li>ID : ${ele.id}</li>
      <li>Name : ${ele.name}</li>
      </ul>` + "<br>";
      });
      document.getElementById("users").innerHTML = output2;
    }
  };
  xhr.send();
}
