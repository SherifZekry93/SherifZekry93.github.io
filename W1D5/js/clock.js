function getTime()
{
    var today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    s = checkTime(s);
    let day = today.getDate();
    
    let month = today.getMonth();
    
    let year = today.getFullYear();
    
    document.getElementById("txt").innerHTML 
    
    = 

    year+"-"+month+"-"+day+" "+h+":"+m+":"+s
    
    var t = setTimeout(getTime, 500);
}
function checkTime(time)
{
    if(time < 10)
    {
        time = 0 + time;
    }
    return time;
}