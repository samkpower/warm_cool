function HueInterval (options) {
	this.hue = options.name;
  this.tinycolor = new tinycolor(this.hue);
  this.interval = options.interval;
  this.warmInterval = options.warmInterval;
  this.coolInterval = options.coolInterval;
}

HueInterval.prototype = {
	constructor: HueInterval,

	init: function() {
		return this;
	}
};
