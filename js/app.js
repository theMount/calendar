// options :
var my_city="45233";
var my_key="5b0bef4cc7145805130803";
var no_of_days=2;
// build URI:
var uri="http://free.worldweatheronline.com/feed/weather.ashx?q="+my_city+"&key="+my_key+"&format=json&no_of_days="+no_of_days+"&includeLocation=yes";
// uri-encode it to prevent errors :
uri=encodeURI(uri); 

jQuery.get(uri,function(r){

 if(r.data.error) {

  // error exists, so display it
  alert(r.data.error[0].msg);

  } else {

   // no error
   // add some weather data to variables
   var current_condition = r.data.current_condition[0].weatherDesc[0].value;
   alert(current_condition);

 }//end if

},"jsonp"); // end jQuery.get()