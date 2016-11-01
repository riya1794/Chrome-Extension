chrome.browserAction.onClicked.addListener(function(tab) {
 var queryInfo = {
    active: true,
    currentWindow: true
 };
 chrome.tabs.query(queryInfo, function(tabs) {
    function getPosition(str, m, i) {
 	  return str.split(m, i).join(m).length;
	}
    var tab = tabs[0];
    var url = tab.url;
    var start=0;
    var end=0;
    //if in sites www. is present
    if(getPosition(url,".",1)!=getPosition(url,".com",1) && getPosition(url,".",1)!=getPosition(url,".in",1)){
    	start=getPosition(url,".",1)+1;
    }
    if(getPosition(url,".com",1)>getPosition(url,".in",1))
    	end=getPosition(url,".in",1);
   	else
   		end=getPosition(url,".com",1);
    url=url.substring(start,end);
   	 if(localStorage[url+"_email"] && localStorage[url+"_email"]!="undefined")
   	 {
	     var id = localStorage[url+'_id']; 
	     var passId = localStorage[url+'_password_id'];
	     var email = localStorage[url+'_email'];
	     var password = localStorage[url+'_password'];
	     chrome.tabs.executeScript({
    		code: 'document.getElementById("'+id+'").value="'+email+'";document.getElementById("'+passId+'").value="'+password+'"'
  		 });      	 	  
   	 }
   	 else
   	 {
   	 	alert("Username and password not present for the website");
   	 	chrome.tabs.executeScript(null, {file:"content.js"}, function(results){
   	 		i=results[0];
   	 		localStorage[url+'_id']=i[0];
   	 		localStorage[url+'_email']=i[1];
   	 		localStorage[url+'_password_id']=i[2];
   	 		localStorage[url+'_password']=i[3];
   	 	});
   	 }
  });
});