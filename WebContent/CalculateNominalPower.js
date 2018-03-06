/**
 * 
 */
function calculateNominalPower(area)
{
	document.getElementById("area").innerHTML =
    	"Polygon Area: " + area+" sq.meter";
	findNumberOfSolarPanels(area);
	
	
}
function findNumberOfSolarPanels(area)
{
	 //Assuming standard solar panel dimensions 65 * 35 inches or 17.5 sq.ft area i.e 1.625 sq meters.
	 // Now area of polygon will be divided by standard solar panel area to get approximate number of solar panel.
	 var noOfSolarPanel = area/1.625;
	  document.getElementById("number").innerHTML ="Approximate no of solar Panels "+parseInt(noOfSolarPanel);
	  findNominalPower(parseInt(noOfSolarPanel));
	 
}
function findPerformanceRatio()
{
	//Performance ratio, coefficient for losses (range between 0.5 and 0.9, default value = 0.75)
	/*L1 - inverter loss
	l2 - temp loses 8%
	l3 - dc cable loss 2%
	l4 - ac cable loss 2%
	l5 - shading loss 3%
	l6 - weak radiation loss 3%
	l7 - dust/snow loss 2%
	l8 - other loss - 0%*/
	var PR =(1-L1)*(1-L2)*(1-l3)*(1-L4)*(1-L5)*(1-L6)(1-L7)*(1-L8);

}
function findNominalPower(noOfSolarPanel)
{
	//PR = Performance ratio, coefficient for losses (range between 0.5 and 0.9, default value = 0.75)
	var PR=.75;
	var solarPanelArea = 1.625*noOfSolarPanel;//maximum area used by solar panel in square meter.
	//Assuming maximum throughPut of Sunlight in 1 day - i.e 4 hrs in 24 hrs  which is 15%
	//r is the yield of the solar panel given by the ratio : electrical power (in kWp) of one solar panel divided by the area of one panel.
	//Example : the solar panel yield of a PV module of 250 Wp with an area of 1.6 m2 is 15.6%.
	var r =.15;
	//Assuming Annual Average Radiation On Tilted Planes is 1250- ideally it will vary state to state and month.
	var H =1250;
	var totalEnergy= solarPanelArea*r*H*PR;
	document.getElementById("totalEnergy").innerHTML ="Nominal Power "+totalEnergy;
    $('#floating-panel-cal').show();

}