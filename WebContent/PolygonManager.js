
var polyOptions = {
	    strokeWeight: 0,
	    fillOpacity: 0.45,
	    clickable: true,
	    editable: true,
	    fillColor: '#FF1493'
	  };
var selectedShape;
var all_overlays = [];
var map;
//function for drawing polynomial
function drawingTools(map){
	

	 var drawingManager = new google.maps.drawing.DrawingManager({
         drawingMode: google.maps.drawing.OverlayType.POLYGON,
         drawingControl: true,
         drawingControlOptions: {
             position: google.maps.ControlPosition.TOP_CENTER,
             drawingModes: ['polygon']
           },
         markerOptions: {
             draggable: true
           },
           polygonOptions: polyOptions
        
       });
	 $('#enablePolygon').click(function() {
		    drawingManager.setMap(map);
		    drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
		  });
	 $('#resetPolygon').click(function() {
		    if (selectedShape) {
		      selectedShape.setMap(null);
		    }
		    drawingManager.setMap(null);
		    $('#showonPolygon').hide();
		    $('#resetPolygon').hide();
		     $('#floating-panel-cal').hide();

		  });
	 google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
		    var area = google.maps.geometry.spherical.computeArea(selectedShape.getPath());
		    calculateNominalPower(area);
		    
		    $('#resetPolygon').show();
		  });
	 function clearSelection() {
		    if (selectedShape) {
		      selectedShape.setEditable(false);
		      selectedShape = null;
		    }
		  }
		function setSelection(shape) {
		    clearSelection();
		    selectedShape = shape;
		    shape.setEditable(true);
		  }

	 
	 google.maps.event.addListener(drawingManager, 'overlaycomplete', function(e) {
         all_overlays.push(e);
         if (e.type != google.maps.drawing.OverlayType.MARKER) {
           // Switch back to non-drawing mode after drawing a shape.
           drawingManager.setDrawingMode(null);

           // Add an event listener that selects the newly-drawn shape when the user
           // mouses down on it.
           var newShape = e.overlay;
           newShape.type = e.type;
           google.maps.event.addListener(newShape, 'click', function() {
             setSelection(newShape);
           });
           setSelection(newShape);
         }
       });
    	
	 
 }
google.maps.event.addDomListener(window, "load", initialize);


