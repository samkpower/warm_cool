var redGreaterThanBlue = function (c) {
	if (c._r > c._b) {
		return true;
	} else {
		return false;
	}
}

var blueGreaterThanRed = function (c) {
	if (c._b > c._r) {
		return true;
	} else {
		return false;
	}
}

var closerToOrangeThanBlue = function (c) {
	var orange = new tinycolor("orange");
	var blue = new tinycolor("blue");

	if ( c.calcRgbDiff(orange).total < c.calcRgbDiff(blue).total ) {
		return true;
	} else {
		return false;
	}
}

var closerToBlueThanOrange = function (c) {
	var orange = new tinycolor("orange");
	var blue = new tinycolor("blue");

	if (c.calcRgbDiff(blue).total < c.calcRgbDiff(orange).total) {
		return true;
	} else {
		return false;
	}
}

var warmBlue = function (c) {
	var upper = 240 + 30;
	var lower = 240 - 30;
	var orange = new tinycolor("orange");
	var blue = new tinycolor("blue");

	if ( upper > c.getHue() && c.getHue() > lower && c.calcRgbDiff(orange).total < c.calcRgbDiff(blue).total ) {
		return true;
	} else {
		return false;
	}
}

var coolBlue = function (c) {
	var upper = 240 + 30;
	var lower = 240 - 30;
	var orange = new tinycolor("orange");
	var blue = new tinycolor("blue");

	if ( upper > c.getHue() && c.getHue() > lower && c.calcRgbDiff(orange).total > c.calcRgbDiff(blue).total ) {
		return true;
	} else {
		return false;
	}
}

new ColourGrid(".experiment .colour-grid").init();

new ColourGrid(".red-grid").init().applyCustomRule(redGreaterThanBlue);
new ColourGrid(".blue-grid-1").init().applyCustomRule(blueGreaterThanRed);

new ColourGrid(".orange-grid").init().applyCustomRule(closerToOrangeThanBlue);
new ColourGrid(".blue-grid-2").init().applyCustomRule(closerToBlueThanOrange);

new ColourGrid(".warm-blue-grid").init().applyCustomRule(warmBlue);
new ColourGrid(".cool-blue-grid").init().applyCustomRule(coolBlue);

