<script type="text/javascript"
     src="http://maps.google.com/maps/api/js?sensor=set_to_true_or_false">
</script> 

var geocoder = new google.maps.Geocoder();
var address = document.getElementById("address").value;
geocoder.geocode( { 'address': address}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK)
  {
      // do something with the geocoded result
      //
      // results[0].geometry.location.latitude
      // results[0].geometry.location.longitude
  }
});