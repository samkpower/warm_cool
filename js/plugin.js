function ColourTarget (node){
	this.$ = $(node);
	this.initColours = {};
	this.hoverColours = {};
}

ColourTarget.prototype = {
	constructor: ColourTarget,
	init: function(){
		var self = this;
		self.getInitColours();
		self.initBehaviour();
	},
	getInitColours: function(){
		this.initColours = {
			'color': this.$.css('color'),
			'border-color': this.$.css('border-color'),
			'background-color': this.$.css('background-color'),
			'text-shadow-color': this.$.css('text-shadow-color'),
			'box-shadow-color': this.$.css('box-shadow-color')
		};
	},
	getHoverColours: function(){
		this.hoverColours = {
			'color': this.$.css('color'),
			'border-color': this.$.css('border-color'),
			'background-color': this.$.css('background-color'),
			'text-shadow-color': this.$.css('text-shadow-color'),
			'box-shadow-color': this.$.css('box-shadow-color')
		};
	},
	initBehaviour: function(){
		var self = this;
		self.$.on('mouseenter', function(){
			self.getHoverColours();
			self.$.css('outline', 'red dotted 1px');
			self.$.on('click', function(e){
				e.stopImmediatePropagation();
				$(this).ColorPickerSliders({
		            order: {
		                cie: 1,
		                preview: 2
		            },
		            color: self.initColours.color,
		            onchange: function(container, color){
		            	self.$.css('color', color.tiny.toString());
		            }
		        });
			})
		});

		self.$.on('mouseleave', function(){
			self.$.css('outline', 'none');
		});
	},
	setColours: function(){
		var self = this
		$.each(this.initColours, function(a,b){
			self.$.css(a,b);
		});
	}
}

$('html *').each(function(){
	var obj = new ColourTarget(this).init();
});