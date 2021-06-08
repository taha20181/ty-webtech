
<script type="text/javascript">
function Validation()
{
var emailID = document.myForm.EMail.value;
var num=document.myForm.ph.value;


atpos = emailID.indexOf("@");    
dotpos = emailID.lastIndexOf(".");
if (atpos< 1 || ( dotpos - atpos< 2 ))
{
alert("Please enter correct email ID")    kanchi@.com atpos=6   dotpos=7
document.myForm.EMail.focus() ;
return false;
}
else if (isNaN(num)){
document.getElementById("ph");
alert("Please enter numeric only.");
return false;
}else{
return true;
}

</script>
