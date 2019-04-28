<html>
<head>
<script>
var a=23;
function f1(){
   var a=34;
   b=46;
   alert("In f1");
}
function test(){
//f1();
//alert(b);
var cnt=1;
cnt=cnt+1
}

</script>
</head>
<body >
<p> this is para</p>
<p onclick="test()"> this is para</p>

</body>

</html>