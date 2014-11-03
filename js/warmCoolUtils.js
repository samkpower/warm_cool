var WarmCoolUtils = {
	getHue: function(){
		return this.toHsl().h;
	},
	getHueAnchor: function(){
		var h = this.getHue();
		if ( h < 30 || h > 330 ) {
			return new tinycolor("red");
		}
	},
	calcDiff: function(rgbKey, rgbValue){
		return Math.abs(this[rgbKey] - rgbValue);
	},
	calcRgbDiff: function(rgb){
		var rgbDiff = {
			'r': this.calcDiff('_r', rgb._r),
			'g': this.calcDiff('_g', rgb._g),
			'b': this.calcDiff('_b', rgb._b),
		}
		rgbDiff.total = rgbDiff.r + rgbDiff.b + rgbDiff.g;
		return rgbDiff;
	},
	calcHueDiff: function (rgb) {
		var hueDiff = this.getHue() - rgb.getHue();
		if (hueDiff < 0) {
			hueDiff = hueDiff * -1;
		}
		return hueDiff;
	},
	isWarm: function (){
		var warmDiff = this.calcRgbDiff(warmDef).total;
		var coolDiff = this.calcRgbDiff(coolDef).total;

		if (warmDiff < coolDiff) {
			return true;
		} else {
			return false;
		}
	},
	isCool: function (){
		var warmDiff = this.calcRgbDiff(warmDef).total;
		var coolDiff = this.calcRgbDiff(coolDef).total;

		if (coolDiff < warmDiff) {
			return true;
		} else {
			return false;
		}
	}
}

var warmDef = new tinycolor ({
	'r': 255,
	'g': 127,
	'b': 0
});

var coolDef = new tinycolor ({
	'r': 0,
	'g': 127,
	'b': 255
});

_.extend(tinycolor.prototype, WarmCoolUtils);