function ColourTarget (){
	
}


$('*').on('mouseenter', function(){
	$(this).css('outline', 'red dotted 1px');
	$(this).on('click', function(e){
		e.stopImmediatePropagation();
		var colortarget = this;
		$(this).ColorPickerSliders({
            order: {
                cie: 1,
                preview: 2
            },
            color: $(this).css('color'),
            onchange: function(container, color){
            	this.connectedinput.css('color', color.tiny.toString());
            }
        });
	})
});

$('*').on('mouseleave', function(){
	$(this).css('outline', 'none');
});