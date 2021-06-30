async function weather(){
    var city=document.getElementById("city").value;
    var x="http://api.weatherapi.com/v1/current.json?key=f68b420733c844d6ab072140212806&q="+city+"&aqi=yes";
    var weather=await fetch(x);
    var res=await weather.json();
    var report=res.current.temp_c;
    document.getElementById("result").innerHTML=report;
}