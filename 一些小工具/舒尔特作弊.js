var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
document.head.appendChild(script);


//创建样式
var style = $('<style type="text/css"></style>');
style.html('.myClass { color: red; font-size:1rem; }');
$('head').append(style);

function findMin()
{
    var currentValue = 0;

    if($(".right"))
    {
        currentValue = parseInt($(".right").text());
    }

    var rightValue = currentValue + 1;
    console.log(rightValue);

    $('.card').each(function(){

        var inner =  $(this).find(".card-deep-inner");
        inner.removeClass("myClass");

        var vaule = parseInt(inner.text());
        if(vaule == rightValue.toString())
        {
            inner.addClass("myClass");
            console.log($(this));
        }
    });
};

$(".card").click(function(){
    setTimeout(function(){},20);

    findMin();
});