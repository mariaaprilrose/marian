var mapCanvas = document.getElementById('map_canvas');
var myLatlng = new google.maps.LatLng(14.661129, 121.0627);
var mapOptions = {
  center: myLatlng,
  zoom: 15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(mapCanvas, mapOptions);
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'm.X PR'
});