(function ($) {
  Drupal.behaviors.calculate_drive_time = {
    attach: function (context, settings) {
      // Your Javascript code goes here

      // Field you want the origin pulled from
      var originField = '#origin-field';
      //Field you would like to have distance appear inside
      var targetField = '#result-jquery-field';

      $('.block-calculate-drive-time .calculate-button', context).click(function () {
        var directionsService = new google.maps.DirectionsService();
        var destination = $(originField).val();
        var request = {
          origin: startingAddress,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(result, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              $(targetField).text(result.routes[0].legs[0].duration.text).slideDown();
          }
          else {
            if(destination.length!=0) {
              $(targetField).text('Address is invalid!').slideDown();
            }
            else {
              $(targetField).text("Please input address!").slideDown();
            }
          }
        });
      });
    }
  };
}(jQuery));
