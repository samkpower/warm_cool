function ColourGrid (gridContainer){
	this.gridView = $(gridContainer);
	this.colourChips = [];
	this.rows = [];
	this.columns =[];
}

ColourGrid.prototype = {
	constructor: ColourGrid,
	init: function(){

		
	}
}

var buildColourGrid = function(){
	var $colourChip = $('.templates').find('.colour-chip').clone();

	var gridRow = '';
	for (var i = 0; i < 12; i++) {
	  gridRow += $colourChip[0].outerHTML;
	}

	$('.colour-grid').append(gridRow);

	$('.experiment .colour-chip').each(function(){
		var randColour = randomColour('warm', 'strong');
		$(this).css('background-color', randColour);
	});

	$('.int-warm-grid .colour-chip').each(function(){
		var randColour = randomColour('warm', 'strong');
		$(this).css('background-color', randColour);
	});

	$('.mild-warm-grid .colour-chip').each(function(){
		var randColour = randomColour('warm', 'mild');
		$(this).css('background-color', randColour);
	});

	$('.mild-cool-grid .colour-chip').each(function(){
		var randColour = randomColour('cool', 'mild');
		$(this).css('background-color', randColour);
	});

	$('.int-cool-grid .colour-chip').each(function(){
		var randColour = randomColour('cool', 'strong');
		$(this).css('background-color', randColour);
	});
}