/**
 * 
 */
function initMap() 
{

	 map = new google.maps.Map(document.getElementById('map_canvas'), {
         zoom: 20,
         center: new google.maps.LatLng(42.407211,-71.382439),
         mapTypeId: google.maps.MapTypeId.ROADMAP
       });
     
		
     document.getElementById('submit').addEventListener('click', function() {
    	 locateGeoCodeAddress( map);
     });
     $('#floating-panel-cal ').hide();
     drawingTools(map);
}