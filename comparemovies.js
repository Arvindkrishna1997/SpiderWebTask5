document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();

    var  url1="http://www.omdbapi.com/?t="+document.getElementById("Title1").value+"&y=&plot=&r=json";
    var  url2="http://www.omdbapi.com/?t="+document.getElementById("Title2").value+"&y=&plot=&r=json";
    var array1,array2;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        // alert("came");
        if(xhttp.status==200&&xhttp.readyState==4)
        {
             array1= JSON.parse(xhttp.responseText);

        }
    };
    xhttp.open("GET",url1,true);     //fetch movie1 details
    xhttp.send();
    var xhtp = new XMLHttpRequest();
    xhtp.onreadystatechange = function(){
        // alert("came");
        if(xhtp.status==200&&xhtp.readyState==4)
        {
            array2= JSON.parse(xhtp.responseText);
             getcompare(array1,array2);
        }
    };
    xhtp.open("GET",url2,true);   //fetch movie2 details
    xhtp.send();
});
function getcompare(array1,array2)   //function to compare
{
    if(array1.Response==="True"&&array2.Response==="True")
    {    if(array1.imdbRating==="N/A")
         {
        document.getElementById("compare").innerHTML="ratings of "+array1.Title+" is not available";
        return;
         }
     else if(array2.imdbRating==="N/A")
        {
        document.getElementById("compare").innerHTML="ratings of "+array2.Title+" is not available";
        return;
        }
        if(array1.imdbRating>array2.imdbRating)
        document.getElementById("compare").innerHTML= "<strong>"+array1.Title+"</strong>("+array1.imdbRating+"<sub>/10</sub>)  has more ratings than "+"<strong>"+array2.Title+"</strong>("+array2.imdbRating+"<sub>/10</sub>)";
         else
            document.getElementById("compare").innerHTML= "<strong>"+array2.Title+"</strong>("+array2.imdbRating+"<sub>/10</sub>)  has more ratings than "+"<strong>"+array1.Title+"</strong>("+array1.imdbRating+"<sub>/10</sub>)";
    }
    else
        alert("Movie(s) not found");



}