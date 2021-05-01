$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount=topic.length;
    var months=['1','2','3','4','5','6','7','8','9','10','11','12'];
    var weekdays=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    var millisecsPerDay=1000*24*60*60;
    for(var x=0;x<topicCount;x++)
    {
        var num=0;
        var Num=0;
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        Num=startDate.getTime()+7*x*millisecsPerDay;
        num=(new Date(Num));   
        if(months[num.getMonth()]>'2')
        {
           Num=startDate.getTime()+(7*x)*millisecsPerDay;
           num=(new Date(Num));  
        }
        
        
           
        $("#courseTable").append(`<td>${months[num.getMonth()]+'/'+weekdays[num.getDate()]}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
       
    }
    });
    