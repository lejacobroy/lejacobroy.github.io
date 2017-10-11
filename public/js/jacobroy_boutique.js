      //tooltips
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip()
});
//snipcart
$(document).ready(function(){
  Snipcart.execute('config', 'show_continue_shopping', true);
  var detail;
  detail = $('#detail').text();
  switch(detail){

  		//NORMAL
  		case 'normal': 
		var output1;
		output1 = 75;
		document.getElementById("bouton1").innerHTML = output1 + 10;

		var output2;
		output2 = 90;
		document.getElementById("bouton2").innerHTML = output2 + 10;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
		    	case '16" x 11"': 
		    	$('#button_affiche').prop('disabled', false);
		    	$('#button_toile').prop('disabled', false);
				output1 = 75;
				output2 = 90;
				break;
				case '24" x 16"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 90;
				output2 = 140;
				break;
				case '30" x 20"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 105;
				output2 = 180;
				break;
				case '36" x 24"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 135;
				output2 = 240;
				break;
				case '42" x 28"': 
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 165;
				output2 = 300;		
				break;
				case '48" x 32"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 195;
				output2 = 380;
				break;
				case '55" x 37"':
				$('#button_affiche').prop('disabled', true);
				$('#button_toile').prop('disabled', false);
				output2 = 480;
				break;
		    }

				document.getElementById("bouton1").innerHTML = output1 + 10;
				
				document.getElementById("bouton2").innerHTML = output2 + 10;
		});
		break;

		//panoramique
		case 'panoramique':
				var output1;
		output1 = 75;
		document.getElementById("bouton1").innerHTML = output1 + 10;

		var output2;
		output2 = 120;
		document.getElementById("bouton2").innerHTML = output2 + 10;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
				case '24" x 12"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 75;
				output2 = 120;
				break;
				case '30" x 15"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 90;
				output2 = 150;
				break;
				case '36" x 18"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 120;
				output2 = 190;
				break;
				case '42" x 21"': 
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 135;
				output2 = 240;		
				break;
				case '48" x 24"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 165;
				output2 = 300;
				break;
				case '55" x 28"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 195;
				output2 = 380;
				break;
				case '60" x 30"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 225;
				output2 = 510;
				break;
				case '70" x 35"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', true);
				output1 = 385;
				break;
		    }

				document.getElementById("bouton1").innerHTML = output1 + 10;
				
				document.getElementById("bouton2").innerHTML = output2 + 10;
		});
		break;

		//carre
		case 'carre':
				var output1;
		output1 = 60;
		document.getElementById("bouton1").innerHTML = (output1 + 10).toString() + "$ &middot; Papier affiche";;

		var output2;
		output2 = 90;
		document.getElementById("bouton2").innerHTML = output2 + 10;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
		    	case '12" x 12"': 
		    	$('#button_affiche').prop('disabled', false);
		    	$('#button_toile').prop('disabled', false);
				output1 = 60;
				output2 = 90;
				break;
				case '16" x 16"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 75;
				output2 = 110;
				break;
				case '24" x 24"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 105;
				output2 = 180;
				break;
				case '30" x 30"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 135;
				output2 = 240;
				break;
				case '36" x 36"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 180;
				output2 = 330;
				break;
		    }
				if(!output1){
					document.getElementById("bouton1").innerHTML = "Indisponible";
				}else{
					document.getElementById("bouton1").innerHTML = (output1 + 10).toString() + "$ &middot; Papier affiche";
				}
				document.getElementById("bouton2").innerHTML = output2 + 10;
		});
		break;

		//aerien
		case 'aerien':
				var output1;
		output1 = 60;
		document.getElementById("bouton1").innerHTML = output1 + 10;

		var output2;
		output2 = 90;
		document.getElementById("bouton2").innerHTML = output2 + 10;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
		    	case '16" x 9"': 
		    	$('#button_affiche').prop('disabled', false);
		    	$('#button_toile').prop('disabled', false);
				output1 = 60;
				output2 = 90;
				break;
				case '24" x 13"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 75;
				output2 = 120;
				break;
				case '30" x 17"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 105;
				output2 = 160;
				break;
				case '36" x 20"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 120;
				output2 = 210;
				break;
				case '42" x 24"': 
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 150;
				output2 = 270;		
				break;
				case '48" x 27"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 180;
				output2 = 330;
				break;
				case '55" x 31"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 210;
				output2 = 410;
				break;
				case '60" x 34"':
				$('#button_affiche').prop('disabled', false);
				$('#button_toile').prop('disabled', false);
				output1 = 240;
				output2 = 560;
				break;
		    }
				
				document.getElementById("bouton1").innerHTML = output1 + 10;
				
				document.getElementById("bouton2").innerHTML = output2 + 10;
		});
		break;
	}
});