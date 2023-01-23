$(principal);

$("p").bind("click", function(){
    $( "This is a click Event").appendTo( "body" );
 });
 
 $("p").bind("dblclick", function(){
    $( "This is a double-click Event"  ).appendTo( "body" );
 });
