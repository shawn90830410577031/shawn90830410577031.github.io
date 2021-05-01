$(function(){
    $("input").on("click",function(){
        var numberOFListItem=$("li").length;
        var randomChildNumber=Math.floor(Math.random()*numberOFListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        //<script type="text/javascript"></script>
       if(randomChildNumber==0)
       {
        $("#img1").attr("src","拉麵.jpg");
       }
       else if(randomChildNumber==1)
        {
          $("#img1").attr("src","滷肉飯.jpg");
        }
        else{
          $("#img1").attr("src","pic0.jpg");
        }
       
});
});