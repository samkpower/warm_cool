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