function Rgb(args){
	var attr = {};
	if (args !== null && typeof args === 'object') {
		attr = args;
	}
	this.r = attr['r'] != undefined ? attr['r'] : Math.floor(Math.random() * 256);
	this.g = attr['g'] != undefined ? attr['g'] : Math.floor(Math.random() * 256);
	this.b = attr['b'] != undefined ? attr['b'] : Math.floor(Math.random() * 256);
}

Rgb.prototype = {
	constructor: Rgb,
	calcDiff: function(rgbKey, rgbValue){
		return Math.abs(this[rgbKey] - rgbValue);
	},
	calcRgbDiff: function(rgb){
		var self = this;
		var rgbDiff = {
			'r': self.calcDiff('r', rgb.r),
			'g': self.calcDiff('g', rgb.g),
			'b': self.calcDiff('b', rgb.b),
		}
		rgbDiff.total = rgbDiff.r + rgbDiff.b + rgbDiff.g;
		return rgbDiff;
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

var warmDef = new Rgb ({
	'r': 255,
	'g': 127,
	'b': 0
});

var coolDef = new Rgb ({
	'r': 0,
	'g': 127,
	'b': 255
});