var count = 0;
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

var langObj = {
}

function Datafunction(data){
  var info = JSON.parse(data.responseText);
  var language = [];
  var langObj = {
    ruby: 0
  };

  var li="";
  li= "";

  for(var i in info) {

      language[i] = info[i].language;

    }
// usage example:
var count = 30

language.sort();
console.log(language);
language.filter(function(val) { return val !== null; }).join(", ")
   var current = null;
   var cnt = 0;
   console.log(language.length);
   for (var i = 0; i < language.length; i++) {
       if (language[i] != current && language[i]!=null) {
           if (cnt > 0) {
             new Circlebar({
                   element : `#circle-${i}`,
                   type : "progress",
                 maxValue: (cnt/count)*100
             });
           }
           current = language[i];
           cnt = 1;
       } else {
           cnt++;
       }
   }
   if (cnt > 0) {
     new Circlebar({
           element : "#circle-10",
           type : "progress",
         maxValue: (cnt/count)*100
     });
   }


}
