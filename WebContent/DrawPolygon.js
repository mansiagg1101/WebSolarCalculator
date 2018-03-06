function drawingTools(map)
 {
	 var drawingManager = new google.maps.drawing.DrawingManager({
         drawingMode: google.maps.drawing.OverlayType.MARKER,
         drawingControl: true,
         drawingControlOptions: {
           position: google.maps.ControlPosition.TOP_CENTER,
           drawingModes: ['circle','rectangle','polygon', 'polyline']
         },
         polygonOptions: {
           fillOpacity: 1,
           strokeWeight: 5,
           clickable: true,
           editable: true,
           zIndex: 1
         }
       });
	 drawingManager.setMap(map);
	 google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
   	  if (event.type == 'circle') {
   	    var radius = event.overlay.getRadius();
		    alert("area "+3.14*radius*radius);
		    var area = 3.14*radius*radius;
		    document.getElementById("area").innerHTML =
		    	"area is " + area;
		    findNumber(area);
		    

   	  }
   	});
	 google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
	   	  if (event.type == 'polygon') {
	   	    var radius = event.overlay.getRadius();
			    alert("area "+3.14*radius*radius);
			    document.getElementById("area").innerHTML =
			    	"area is " + 3.14*radius*radius;
			    var numberOfSolarPanels = 3.14*radius*radius
	   	  }
	   	});
	
	 
	 
 }
function findNumber(area)
{
	 //Assuming standard solar panel dimensions 65 * 35 inches or 17.5 sq.ft area i.e 1.625 sq meters.
	 // Now area of polygon will be divided by standard solar panel area to get approximate number of solar panel.
	 var noOfSolarPanel = area/1.625;
	  document.getElementById("number").innerHTML ="Approximate no of solar Panels "+noOfSolarPanel;
	 
}
