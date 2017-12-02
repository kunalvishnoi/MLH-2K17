function load(){
  var username = document.getElementById("username").value;
  var url = "https://api.github.com/users/"+username + "/repos";

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
  if(this.readyState==4 && this.status==200)
    {
      Datafunction(this);

    }
}

request.open("GET",url,true);
request.send();
}




function Datafunction(data){
  var info = JSON.parse(data.responseText);
  var language = [];
  console.log(info);
  var li="";
  var count = 0;
  for(var i in info)
    {

        count+=1;
        language[i] = info[i].language;
    }


    uniqueArray = language.filter(function(item, pos) {
      return language.indexOf(item) == pos;
  })
// usage example:


for(var i in uniqueArray)
  {
    li +="<ul><li>"+

      "<b>NAME:</b> "+
      uniqueArray[i]

      + "</li></ul>";

  }

  document.getElementById("container").innerHTML = li;
  document.getElementById("count").innerHTML = count;

}
