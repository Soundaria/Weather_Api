async function weather(){
    var city=document.getElementById("city").value;
    var x="http://api.weatherapi.com/v1/current.json?key=f68b420733c844d6ab072140212806&q="+city+"&aqi=yes";
    var weather=await fetch(x);
    var res=await weather.json();
    if(city!="choose"){
        document.getElementById("section1").style.display="none";
        document.getElementById("section2").style.display="none";
        document.getElementById("result").innerHTML=res.location.name;
        document.getElementById("temp").innerHTML="Temperature : "+res.current.temp_c+"°C // "+res.current.temp_f+" F<br /> Climate :  "+res.current.condition.text+"<br /> Humidity : "+res.current.humidity+" g/cubicmeter <br /> Latitude : "+res.location.lat+"°<br /> Longitude : "+res.location.lon+"°";
    }
    else{
        alert("Place field cannot be empty");
    }
}
