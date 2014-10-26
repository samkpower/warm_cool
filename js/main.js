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
	return tinycolor(rgb).toRgbString();
}

new ColourGrid(".experiment .colour-grid").init();
new ColourGrid(".orange-grid").init();
new ColourGrid(".blue-grid").init();
new ColourGrid(".int-warm-grid").init();
new ColourGrid(".mild-warm-grid").init();
new ColourGrid(".mild-cool-grid").init();
new ColourGrid(".int-cool-grid").init();

