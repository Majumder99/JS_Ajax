// HTTP Statuses
// 200 : "OK"
// 403 : "Forbidden"
// 404 : "Not Found"

// ReadyState values
// 0 : request not initialized
// 1 : server connection establicshed
// 2 : request reveived
// 3 : processing request
// 4 : request finished and response if ready

document.getElementById("button").addEventListener("click", loadText);

function loadText() {
  // Create XHR Object
  var xhr = new XMLHttpRequest();
  // OPEN - type, url/file, async
  //   console.log(xhr);
  xhr.open("GET", "sample.txt", true);
  console.log("READYSTATE: ", xhr.readyState);

  // OPTIONAL - used for loaders( processing request)
  xhr.onprogress = function () {
    console.log("READYSTATE: ", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTATE: ", xhr.readyState);
    if (this.status == 200) {
      //   console.log(this.responseText);
      document.getElementById("text").innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "No response";
    }
  };

  xhr.onerror = function () {
    console.log(`Request Error...`);
  };

  // difference between onload and onreadystatechange is that in onreadystate readystate must be 4 and onload doesn't check readyState 2 and 3 but onreadystatechange check 1 2 3 4
  //   xhr.onreadystatechange = function () {
  //     console.log("READYSTATE: ", xhr.readyState);
  //     if (this.readyState == 4 && this.status == 200) {
  //       //   console.log(this.responseText);
  //     }
  //   };
  // Send request
  xhr.send();
}
