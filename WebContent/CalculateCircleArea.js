/**
 * 
 */
function calculateCircleArea(drawingManager)
{
	google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
		  if (event.type == 'circle') {
		    var radius = event.overlay.getRadius();
		    document.getElementById("area").innerHTML = 2*3.14*radius;
		  }
		});
}