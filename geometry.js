
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	var floatRectArea;
	var floatRectPerim;
	var floatS;
	var floatTriangleArea;
	var floatTrianglePerim;
	var floatCircleArea;
	var floatCircleCircum;	//I think I accidentaly declared all of these variables locally so I don't need them there. They DO connect correctly with the below alert, though (the beige parts)

	alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
	" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
	"\n\n" + "The Triangle area is " + 	triangleArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
	" and the perimeter is " + 
	trianglePerim(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
	"The Circle area is " + circleArea(floatRadius) + 
	" and the circumference is " + circleCircum(floatRadius));


};

/*
 * the calcCircleCircum function is activated when the calc_circle_cirum button on the DOM
 * is clicked.  It reads the radius information from the DOM and then reports the circle
 * circumference in an alert box, using the circleCircum function to perform the calculation
 */
var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

/*
 * the circleCircum function accepts some input for radius and then calculates the circumference
 * using the 2 * pi * radius formula.  The circumference value is returned, but note that it has been
 * converted to a string with 2 decimal points [the toFixed() method in JavaScript takes a number and 
 * lops off everything after the desired decimal points, and then for some unexplicable reason converts
 * the resulting number into a string]
 */
function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}

var calcCircleArea = function()
{
    var floatRadius= parseFloat($("radius").value);

    alert ("The Circle area is " + circleArea(floatRadius));
};
function circleArea(floatRadius_par)
{
    var floatArea = parseFloat (Math.PI * Math.pow(floatRadius_par,2));
    return floatArea.toFixed(2);
}
var calcRectArea = function ()
{
	var floatRectWidth = parseFloat($("rect_width").value);// width needs to be first (consistent with parameters on function part. Name of parameters don't matter)
    var floatRectHeight = parseFloat($("rect_height").value);
    alert ("The Rectangle area is " + rectArea(floatRectWidth, floatRectHeight)); // pass it in the parentheses (passing parameters). Order of parameters does not matter here
};
function rectArea (floatRectWidth_par, floatRectHeight_par)//doesn't matter what you call it. You pass two things and receive two things. Order matters here
{
    var floatArea = (floatRectWidth_par * floatRectHeight_par);// what is it passing? rect_width and rect_height
    return floatArea.toFixed(2);
}
var calcRectPerim = function ()
{
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);
	alert ("The Rectangle perimiter is " + rectPerim(floatRectWidth, floatRectHeight));
};
function rectPerim (floatRectWidth_par, floatRectHeight_par)
{
	var floatPerim = (2 * floatRectWidth_par + 2 * floatRectHeight_par);
	return floatPerim.toFixed(2);
}
var calcTriangleArea = function ()
{
	var floatTriSide1 = parseFloat ($("tri_side1").value);
	var floatTriSide2 = parseFloat ($("tri_side2").value);
	var floatTriSide3 = parseFloat ($("tri_side3").value);
	alert ("The Triangle's Area is " + triangleArea (floatTriSide1, floatTriSide2, floatTriSide3));
};
function triangleArea (floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
	var floatS= parseFloat ((floatTriSide1_par + floatTriSide2_par + floatTriSide3_par)/2);
	var floatArea = parseFloat (Math.sqrt((floatS*(floatS-floatTriSide1_par)*(floatS-floatTriSide2_par)*(floatS-floatTriSide3_par))));
	return floatArea.toFixed(2);
}
var calcTrianglePerim = function()
{
	var floatTriSide1 = parseFloat ($("tri_side1").value);
	var floatTriSide2 = parseFloat ($("tri_side2").value);
	var floatTriSide3 = parseFloat ($("tri_side3").value);
	alert ("The Triangle's Area is " + trianglePerim (floatTriSide1, floatTriSide2, floatTriSide3));
};
function trianglePerim (floatTriSide1_par, floatTriSide2_par, floatTriSide3_par)
{
	var floatPerim = parseFloat (floatTriSide1_par + floatTriSide2_par + floatTriSide3_par);
	return floatPerim.toFixed(2);
}
window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_circle_area").onclick = calcCircleArea;
	$("calc_rect_area").onclick = calcRectArea;
	$("calc_rect_perim").onclick= calcRectPerim;//where do we send these back? Using alerts instead of DOM output (is that the correct term?)
	$("calc_tri_area").onclick = calcTriangleArea;
	$("calc_tri_perim").onclick= calcTrianglePerim;
   
};
