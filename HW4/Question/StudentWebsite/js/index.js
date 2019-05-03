Object.keys(state_info).forEach(function(mark){
  $(document).ready(function() {
      var apiKey = 'de60b707d5db46681a7c24637464f163'; // Enter your API Key here
      console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url
      // TODO
      // Iterate over the state_info array and call the api for each state_name to get the current temperature
      // Example to call the api using state_name
      // This should be done inside the for loop
      console.log(mark);
      var url ='https://api.darksky.net/forecast/' + apiKey + '/'+ state_info[mark].lat + ',' + state_info[mark].lng;
      console.log(url);
      var temperature;
      function fillStates(data) {
          //console.log(data)
          temperature = data.currently.apparentTemperature;
          if(temperature<=10) {//blue
            $('#'+mark).css('fill', "blue");
          }
          else if(temperature>10 && temperature<=30){//Cyan
            $('#'+mark).css('fill', "cyan");
          }
          else if(temperature>30 && temperature<=50){
            $('#'+mark).css('fill', "green");
          }
          else if(temperature>50 && temperature<=80){
            $('#'+mark).css('fill', "orange");
          }
          else{
            $('#'+mark).css('fill', "red");
          }
          console.log(mark+':'+temperature);
          // TODO
          // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
          // var temperature =

          //TODO
          // Default color gray
          // Create a series of if else blocks to set the color for the state based on the temperature
          // Less than equal to 10 should be blue
          // Between 11 and 30 should be cyan
          // Between 31 and 50 should be green
          // Between 51 and 80 should be orange
          // Greater than 80 should be red
      }
      $.ajax({url:url, dataType:"jsonp"}).then(fillStates);


  });
});
