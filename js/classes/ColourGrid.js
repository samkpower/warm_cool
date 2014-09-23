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
			$(this).css("background-color", randomColour());
		});
	}
}