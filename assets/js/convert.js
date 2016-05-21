$(document).ready(function(){
  var baseurl = 'https://openexchangerates.org/api';
	$.ajax({
		url: baseurl +"/currencies.json",
		type: "GET",
		dataType: "json",
		success: function (data) {
		    for(var key in  data){
		    	 $('#convert_from').append($("<option></option>")
                    .attr("value",key)
                    .text(key)); 
		    	 $('#convert_to').append($("<option></option>")
                    .attr("value",key)
                    .text(key));
           console.log("hi")
		    }
	}
	});
   var fro = 0;
   var to = 0;
 

    
	$("#formconvert").submit(function(e) {
    var amount = $("#amount").val();
    var convFrom = $('#convert_from option:selected').val();
    var convTo =  $('#convert_to option:selected').val();
    var url = baseurl+ "/latest.json?app_id=7c3a11e894794c4e91be3e449d4b7c86&base=" + convFrom;
    $.ajax({
           type: "GET",
           url: url,
           success: function(data)
           {
           	console.log(data.rates)

            }
         });
      
      e.preventDefault();
});
});