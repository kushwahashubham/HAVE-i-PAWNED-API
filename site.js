$(document).ready(function(){

    $('#getDataButton').click(function(){
        var email = $('#emailInput').val();
      $.get("https://haveibeenpwned.com/unifiedsearch/" + email, function(matchdata) {
          console.log(matchdata);
	matchdata.Breaches.forEach(function(md) {
		//console.log(md.Title + "<br>" + md.Description+ "<br>" +md.BreachDate+ "<br>" +md.PwnCount + "<br>" +md.Domain+ "<br>" );   
        $('.card-text').append("Title : "+ md.Title + "<br>");
        $('.card-text').append("BreachDate : "+ md.BreachDate + "<br>");
        $('.card-text').append("Pwan Count : "+md.PwnCount + "<br>");
        $('.card-text').append("Domain : "+ md.Domain + "<br>");
        $('.card-text').append("Description : "+md.Description + "<br>");
        $(".card-text").append("-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-<br>");
	});
});

  })
      });
    
