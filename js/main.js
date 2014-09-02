var colourTemperature = function(colour){
	var testColour = tinycolor(colour).toRgb();
	if (testColour['r'] > testColour['b']) {
		return 'warm';
	} else if (testColour['r'] < testColour['b']) {
		return 'cool';
	} else if (testColour['r'] == testColour['b'] == textColour['g']) {
		return 'achromatic';
	}
}

var randomColour = function(temperature, intensity){
	var temp = temperature || null;
	var intensity = intensity || null;
	var rgb = new Rgb();

	if (temp === 'warm' && intensity === 'strong'){
		while ( rgb.notWarm() || rgb.notIntense() ){
			rgb = new Rgb();
		}
	} else if (temp === 'cool' && intensity === 'strong'){
		while ( rgb.notCool() || rgb.notIntense() ){
			rgb = new Rgb();
		}
	} else if (temp === 'warm' && intensity === 'mild'){
		while ( rgb.notWarm() || rgb.notMild() ){
			rgb = new Rgb();
		}
	} else if (temp === 'cool' && intensity === 'mild') {
		while ( rgb.notCool() || rgb.notMild() ){
			rgb = new Rgb();
		}
	}

	console.log('red', rgb['r']);
	console.log('blue', rgb['b']);
	console.log("");

	return tinycolor(rgb).toRgbString();
}

buildColourGrid();