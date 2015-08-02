var WarmCoolUtils = {
	getHue: function(){
		return this.toHsl().h;
	},
	getHueOrigin: function(){
		var h = this.getHue();
		if ( 30 < h && h < 89 ) {
			return new tinycolor("yellow");
		} else if ( 90 < h && h < 149 ) {
			return new tinycolor("green");
		} else if ( 150 < h && h < 209 ) {
			return new tinycolor("cyan");
		} else if ( 210 < h && h < 269 ) {
			return new tinycolor("blue");
		} else if ( 270 < h && h < 329 ) {
			return new tinycolor("fuschia");
		} else {
			return new tinycolor("red");
		}
	},
	getHueOriginName: function() {
		return this.getHueOrigin().toName();
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
	hueIsBetweenInterval: function(intervals){
		if (intervals[0] < this.getHue() && this.getHue() < intervals[1]) {
			return true;
		} else {
			return false;
		}
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
	},
	isWarmish: function () {
	},
	isCoolish: function () {
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

var getHueInterval = function(hue, temperature) {
	if (hue === 'yellow') {
		if (temperature === 'warm') {
			return [30, 60];
		} else if (temperature === 'cool') {
			return [61, 89]
		} else {
			return [30, 89];
		}
	} else if (hue === 'green') {
		if (temperature === 'warm') {
			return [90, 120];
		} else if (temperature === 'cool') {
			return [121, 149];
		} else {
			return [90, 149];
		}
	} else if (hue === 'cyan') {
		if (temperature === 'warm') {
			return [150, 179];
		} else if (temperature === 'cool') {
			return [180, 209];
		} else {
			return [150, 209];
		}
	} else if (hue === 'blue') {
		if (temperature === 'warm') {
			return [210, 239];
		} else if (temperature === 'cool') {
			return [240, 269];
		} else {
			return [210, 269];
		}
	} else if (hue === 'fuchsia') {
		if (temperature === 'warm') {
			return [270, 299];
		} else if (temperature === 'cool') {
			return [300, 329];
		} else {
			return [270, 329];
		}
	} else if (hue === 'red') {
		if (temperature === 'warm') {
			return [0, 30];
		} else if (temperature === 'cool') {
			return [330, 360];
		} else {
			return [[0, 30], [330, 360]];
		}
	} else {
		console.log('error, hue not valid:' + hue);
		return [0, 0];
	}
};

_.extend(tinycolor.prototype, WarmCoolUtils);