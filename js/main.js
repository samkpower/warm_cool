var redGreaterThanBlue = function (c) {
	if (c._r > c._b) {
		return true;
	} else {
		return false;
	}
};

var blueGreaterThanRed = function (c) {
	if (c._b > c._r) {
		return true;
	} else {
		return false;
	}
};

var warm = function (c) {
	var orange = new tinycolor("orange");
	var blue = new tinycolor("blue");

	if ( c.calcRgbDiff(orange).total < c.calcRgbDiff(blue).total ) {
		return true;
	} else {
		return false;
	}
};

var cool = function (c) {
	var orange = new tinycolor("orange");
	var blue = new tinycolor("blue");

	if (c.calcRgbDiff(blue).total < c.calcRgbDiff(orange).total) {
		return true;
	} else {
		return false;
	}
};

var blue = function (c) {
	var upper = 240 + 30;
	var lower = 240 - 30;

	if ( upper > c.getHue() && c.getHue() > lower ) {
		return true;
	} else {
		return false;
	}
};

var green = function (c) {
	var upper = 120 + 30;
	var lower = 120 - 30;

	if ( upper > c.getHue() && c.getHue() > lower ) {
		return true;
	} else {
		return false;
	}
};

var red = function (c) {
	if ( 30 > c.getHue() || c.getHue() > 330 ) {
		return true;
	} else {
		return false;
	}
};

var yellow = function (c) {
	var upper = 60 + 30;
	var lower = 60 - 30;

	if ( upper > c.getHue() && c.getHue() > lower ) {
		return true;
	} else {
		return false;
	}
};

var magenta = function (c) {
	var upper = 300 + 30;
	var lower = 300 - 30;

	if ( upper > c.getHue() && c.getHue() > lower ) {
		return true;
	} else {
		return false;
	}
};

var cyan = function (c) {
	var upper = 180 + 30;
	var lower = 180 - 30;

	if ( upper > c.getHue() && c.getHue() > lower ) {
		return true;
	} else {
		return false;
	}
};

var closerToOrangeHue = function (c) {
	var warmInterval = getHueInterval(c.getHueOriginName(), 'warm');
	if (c.hueIsBetweenInterval(warmInterval)) {
		return true;
	} else {
		return false;
	}
};

var closerToBlueHue = function (c) {
	var coolInterval = getHueInterval(c.getHueOriginName(), 'cool');
	if (c.hueIsBetweenInterval(coolInterval)) {
		return true;
	} else {
		return false;
	}
};


new ColourGrid(".experiment .colour-grid").init();

// ------------

new ColourGrid(".red-grid").init().applyCustomRule(redGreaterThanBlue);
new ColourGrid(".blue-grid-1").init().applyCustomRule(blueGreaterThanRed);

//  -----------

new ColourGrid(".orange-grid").init().applyCustomRule(warm);
new ColourGrid(".blue-grid-2").init().applyCustomRule(cool);

// ------------

new ColourGrid(".warm-blue-grid").init().applyCustomRule(warm, blue);
new ColourGrid(".cool-blue-grid").init().applyCustomRule(cool, blue);

new ColourGrid(".warm-green-grid").init().applyCustomRule(warm, green);
new ColourGrid(".cool-green-grid").init().applyCustomRule(cool, green);

new ColourGrid(".warm-red-grid").init().applyCustomRule(warm, red);
new ColourGrid(".cool-red-grid").init().applyCustomRule(cool, red);

new ColourGrid(".warm-cyan-grid").init().applyCustomRule(warm, cyan);
new ColourGrid(".cool-cyan-grid").init().applyCustomRule(cool, cyan);

new ColourGrid(".warm-magenta-grid").init().applyCustomRule(warm, magenta);
new ColourGrid(".cool-magenta-grid").init().applyCustomRule(cool, magenta);

new ColourGrid(".warm-yellow-grid").init().applyCustomRule(warm, yellow);
new ColourGrid(".cool-yellow-grid").init().applyCustomRule(cool, yellow);

// ------------

new ColourGrid(".warm-blue-grid-2").init().applyCustomRule(closerToOrangeHue, blue);
new ColourGrid(".cool-blue-grid-2").init().applyCustomRule(closerToBlueHue, blue);

new ColourGrid(".warm-green-grid-2").init().applyCustomRule(closerToOrangeHue, green);
new ColourGrid(".cool-green-grid-2").init().applyCustomRule(closerToBlueHue, green);

new ColourGrid(".warm-red-grid-2").init().applyCustomRule(closerToOrangeHue, red);
new ColourGrid(".cool-red-grid-2").init().applyCustomRule(closerToBlueHue, red);

new ColourGrid(".warm-cyan-grid-2").init().applyCustomRule(closerToOrangeHue, cyan);
new ColourGrid(".cool-cyan-grid-2").init().applyCustomRule(closerToBlueHue, cyan);

new ColourGrid(".warm-magenta-grid-2").init().applyCustomRule(closerToOrangeHue, magenta);
new ColourGrid(".cool-magenta-grid-2").init().applyCustomRule(closerToBlueHue, magenta);

new ColourGrid(".warm-yellow-grid-2").init().applyCustomRule(closerToOrangeHue, yellow);
new ColourGrid(".cool-yellow-grid-2").init().applyCustomRule(closerToBlueHue, yellow);
