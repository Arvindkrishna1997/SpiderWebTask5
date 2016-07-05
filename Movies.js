document.getElementById("form").addEventListener("submit",function(e){
   e.preventDefault();
    var  url="http://www.omdbapi.com/?t="+document.getElementById("Title").value+"&y="+document.getElementById("year").value+"&plot="+document.getElementById("plot").value+"&r=json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
       // alert("came");
        if(xhttp.status==200&&xhttp.readyState==4)
        {
            var array= JSON.parse(xhttp.responseText);
            getDetails(array);
        }
    };
    xhttp.open("GET",url,true);
    xhttp.send();
});
function getDetails(array){       //A function the assign the datas. 
    if(array.Response==="True") {
        document.getElementById("movietitle").innerHTML = array.Title + "(" + array.Year + ")";
        document.getElementById("imdbRating").innerHTML = array.imdbRating+"<sub>/10</sub>";
        document.getElementById("imdbVotes").innerHTML = array.imdbVotes;
        document.getElementById("Rated").innerHTML = array.Rated;
        document.getElementById("Runtime").innerHTML = array.Runtime;
        document.getElementById("Genre").innerHTML = array.Genre;
        document.getElementById("Released").innerHTML = array.Released + "(" + array.Country + ")";
        document.getElementById("Poster").src = array.Poster;
        document.getElementById("plotofstory").innerHTML = array.Plot;
        document.getElementById("Director").innerHTML = "<strong>Diector:</strong>" + array.Director;
        document.getElementById("Writer").innerHTML = "<strong>Writer(s):</strong>" + array.Writer;
        document.getElementById("Actors").innerHTML = "<strong>Actors:</strong>" + array.Actors;
        document.getElementById("Language").innerHTML = "<strong>Language:</strong>" + array.Language;
        document.getElementById("Awards").innerHTML = array.Awards;
        document.getElementById("details").style.visibility = "";
    }
    else
        alert("Movie not found");


}