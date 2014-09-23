function ColourTarget (node){
	this.$ = $(node);
	this.initColours = {};
	this.hoverColours = {};
	this.text = false;
	this.block = false;
}

ColourTarget.prototype = {
	constructor: ColourTarget,
	init: function(){
		var self = this;
		console.log(this);
		self.checkTextOrBlock();
		self.getInitColours();
		self.initBehaviour();
	},
	checkTextOrBlock: function(){
		var tag = this.$.prop('tagName')
		if (tag === "P" || tag === "A" || tag === "SPAN" || tag === "LABEL" || tag.match("H") || tag === "LI") {
			this.text = true;
		} else {
			this. block = true;
		}
	},
	setHoverState: function(){
		var self = this;
		self.$.on('mouseenter', function(){
			if (self.text === true) {
				self.$.css('text-shadow', 'red 0px 0px 5px');
			} else {
				self.$.css('outline', 'red dotted 1px');
			}
		});
		self.$.on('mouseleave', function(){
			if (self.text === true) {
				self.$.css('text-shadow', 'none');
			} else {
				self.$.css('outline', 'none');
			}
		});
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
		self.setHoverState();
		self.$.on('mouseenter', function(){
			self.getHoverColours();
			self.$.on('click', function(e){
				e.preventDefault();
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

$('body *').each(function(){
	var obj = new ColourTarget(this).init();
});