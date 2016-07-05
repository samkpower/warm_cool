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
			return new tinycolor("magenta");
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
		};
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
		var warmInterval = getHueInterval(this.getHueOriginName(), 'warm');
		if (c.hueIsBetweenInterval(warmInterval)) {
			return true;
		} else {
			return false;
		}
	},
	isCoolish: function () {
		var coolInterval = getHueInterval(this.getHueOriginName(), 'cool');
		if (this.hueIsBetweenInterval(coolInterval)) {
			return true;
		} else {
			return false;
		}
	}
};

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

var hueIntervalMap = [
	{
		hue: 'yellow',
		interval: [30, 89],
	  warmInterval: [30, 60],
		coolInterval: [61, 89]
	},
	{
		hue: 'green',
		interval: [90, 149],
		warmInterval: [90, 120],
		coolInterval: [121, 149]
	},
	{
		hue: 'cyan',
		interval: [150, 209],
		warmInterval: [150, 179],
		coolInterval: [180, 209]
	},
	{
		hue: 'blue',
		interval: [210, 269],
		warmInterval: [210, 239],
		coolInterval: [240, 269]
	},
	{
		hue: 'magenta',
		interval: [270, 329],
		warmInterval: [300, 329],
		coolInterval: [270, 299],
	},
	{
		hue: 'red',
		interval: [[0, 29], [330, 360]],
		warmInterval: [0, 29],
		coolInterval: [330, 360]
	}
];

var getHueInterval = function (hue, temperature) {
	var hueObject = _.find(hueIntervalMap, function(hueInterval) { return hueInterval.hue === hue; });

	if (hueObject === undefined) {
		var validHues = _.map(hueIntervalMap, function(hueInterval) { return hueInterval.hue; }).join(' ,');
		throw 'Error. Invalid hue. Must be one of: ' + validHues;
	}

	if (temperature && (temperature !== 'warm' ||  temperature !== 'cool')) {
		throw 'Error. Invalid temperature. Must be one of: warm, cool';
	}

	if (temperature) {
		return hueObject[temperature + 'Interval'];
	} else {
		return hueObject.interval;
	}
};

_.extend(tinycolor.prototype, WarmCoolUtils);
