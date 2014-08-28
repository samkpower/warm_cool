function Rgb(args){
	var attr = {};
	if (args !== null && typeof args === 'object') {
		attr = args;
	}
	this.r = attr['red'] || Math.floor(Math.random() * 256);
	this.g = attr['green'] || Math.floor(Math.random() * 256);
	this.b = attr['blue'] || Math.floor(Math.random() * 256);
}

Rgb.prototype = {
	constructor: Rgb,
	notWarm: function(){
		return (this.b >= this.r);
	},
	notCool: function(){
		return (this.r >= this.b);
	},
	notIntense: function(){
		var diff = (this.r - this.b);
		console.log(diff);
		if (diff < 0){
			console.log('less than 0', diff);
			diff = diff * (-1)
			console.log('fixed', diff);
		}
		console.log("diff less than = 100")
		console.log(diff <= 100)
		return (diff <= 100)
	},
	notMild: function(){
		var diff = (this.r - this.b);
		console.log(diff);
		if (diff < 0){
			console.log('less than 0', diff);
			diff = diff * (-1)
			console.log('fixed', diff);
		}
		console.log("diff less than = 100")
		console.log(diff >= 100)
		return (diff >= 100)
	}
}

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
	// } else if (temp === 'cool'){
	// 	console.log ('cool');
	// 	while (rgb['b'] < rgb['r']){
	// 		rgb = randomRgbValue();
	// 	}
	// } else if (temp === 'warm'){
	// 	console.log ('warm');
	// 	while (rgb['r'] < rgb['b']){
	// 		rgb = randomRgbValue();
	// 	}
	// }

	console.log('red', rgb['r']);
	console.log('blue', rgb['b']);
	console.log("");

	return tinycolor(rgb).toRgbString();
}

// var randomRgbValue = function(){
// 	var rgb = {
// 		'r': Math.floor(Math.random() * 256),
// 		'b': Math.floor(Math.random() * 256),
// 		'g': Math.floor(Math.random() * 256)
// 	};
// 	return rgb;
// }

var buildColourGrid = function(){
	var $colourChip = $('.templates').find('.colour-chip').clone();

	var gridRow = '';
	for (var i = 0; i < 12; i++) {
	  gridRow += $colourChip[0].outerHTML;
	}

	$('.colour-grid').append(gridRow);

	$('.int-warm-grid .colour-chip').each(function(){
		var randColour = randomColour('warm', 'strong');
		$(this).css('background-color', randColour);
	});

	$('.mild-warm-grid .colour-chip').each(function(){
		var randColour = randomColour('warm', 'mild');
		$(this).css('background-color', randColour);
	});

	$('.mild-cool-grid .colour-chip').each(function(){
		var randColour = randomColour('cool', 'mild');
		$(this).css('background-color', randColour);
	});

	$('.int-cool-grid .colour-chip').each(function(){
		var randColour = randomColour('cool', 'strong');
		$(this).css('background-color', randColour);
	});
}

buildColourGrid();