function load(){
  var username = document.getElementById("username").value;
  var url = "https://api.github.com/users/" + username;
  var request = new XMLHttpRequest();

  request.onreadystatechange = function(){
    if(request.readyState==4)
      {
        var data = JSON.parse(request.responseText);

        document.getElementById("name").innerHTML = data.name;
        document.getElementById("user").innerHTML = data.login;
        document.getElementById("location").innerHTML = data.location;
        document.getElementById("bio").innerHTML = data.bio;
      }
  }
  request.open('GET', url, true);
  request.send();
}
