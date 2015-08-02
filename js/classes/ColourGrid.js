function ColourGrid (gridContainer, options){
	this.$ = gridContainer
	this.gridView = $(gridContainer);
	this.colourChips = [];
	this.rows = [];
	this.columns =[];
	this.options = options || {};
}

ColourGrid.prototype = {
	constructor: ColourGrid,
	init: function(){
		this.buildGrid();
		this.addColour();
		return this;
	},
	buildGrid: function(){
		var $colourChip = $('.templates').find('.colour-chip').clone();
		var gridRow = "";
		for (var i = 0; i < 12; i++) {
		  gridRow += $colourChip[0].outerHTML;
		}
		this.gridView.append(gridRow);
		this.colourChips = this.gridView.find(".colour-chip");
		return this;
	},
	addColour: function(){
		this.colourChips.each(function(){
			$(this).css("background-color", new tinycolor.random().toRgbString());
		});
	},
	applyCustomRule: function(expressionA, expressionB){
		var ruleA = expressionA || function () { return true } ;
		var ruleB = expressionB || function () { return true } ;
		var retryCount = 0;

		this.colourChips.each(function(){
			var c = tinycolor.random();
			while ((ruleA(c) === false || ruleB(c) === false) && retryCount < 500000) {
				c = tinycolor.random();
				retryCount ++;
			} 
			$(this).css("background-color", c.toRgbString());
		});
	}
}