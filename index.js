async function weather(){
    var city=document.getElementById("city").value;
    var x="http://api.weatherapi.com/v1/current.json?key=f68b420733c844d6ab072140212806&q="+city+"&aqi=yes";
    var weather=await fetch(x);
    var res=await weather.json();
    var scr_width=window.innerWidth;
    if(city!="choose"){
        document.getElementById("section1").style.display="none";
        document.getElementById("section2").style.display="none";
        document.getElementById("result").innerHTML=res.location.name;
        document.getElementById("temp").innerHTML="Temperature : "+res.current.temp_c+"°C // "+res.current.temp_f+" F<br /> Climate :  "+res.current.condition.text+"<br /> Humidity : "+res.current.humidity+" g/m³  <br /> Latitude : "+res.location.lat+"°<br /> Longitude : "+res.location.lon+"°";
    }
    else{
        alert("Input field cannot be empty");
    }
    var temp=res.current.temp_c;
    if(temp>=30){
        document.getElementById("sunny").style.display="block";
    }
    else if(temp>=20){
        document.getElementById("sunny").style.display="block";
    }
}
