      //unveil
$(document).ready(function() {
//snipcart
  Snipcart.execute('config', 'show_continue_shopping', true);
  var detail;
  detail = $('#detail').text();
  switch(detail){

  		//NORMAL
  		case 'normal': 
		var output1;
		output1 = 50;
		document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";;

		var output2;
		output2 = 70;
		document.getElementById("bouton2").innerHTML = output2 + 30;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
		    	case '16" x 11"': 
		    	$('#button_affiche').prop('disabled', false);
				output1 = 50;
				output2 = 70;
				break;
				case '24" x 16"':
				$('#button_affiche').prop('disabled', false);
				output1 = 60;
				output2 = 100;
				break;
				case '30" x 20"':
				$('#button_affiche').prop('disabled', false);
				output1 = 75;
				output2 = 125;
				break;
				case '36" x 24"':
				$('#button_affiche').prop('disabled', false);
				output1 = 85;
				output2 = 155;
				break;
				case '42" x 28"': 
				$('#button_affiche').prop('disabled', false);
				output1 = 100;
				output2 = 190;		
				break;
				case '48" x 32"':
				$('#button_affiche').prop('disabled', false);
				output1 = 115;
				output2 = 230;
				break;
				case '55" x 37"':
				$('#button_affiche').prop('disabled', true);
				output2 = 290;
				break;
				case '60" x 40"':
				$('#button_affiche').prop('disabled', true);
				output2 = 365;
				break;
				case '72" x 48"':
				$('#button_affiche').prop('disabled', true);
				output2 = 515;
				break;

		    }
				if(!output1){
					document.getElementById("bouton1").innerHTML = "Indisponible";
				}else{
					document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";
				}
				document.getElementById("bouton2").innerHTML = output2 + 30;
		});
		break;

		//panoramique
		case 'panoramique':
				var output1;
		output1 = 55;
		document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";;

		var output2;
		output2 = 75;
		document.getElementById("bouton2").innerHTML = output2 + 30;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
		    	case '16" x 8"': 
		    	$('#button_affiche').prop('disabled', false);
				output1 = 45;
				output2 = 65;
				break;
				case '24" x 12"':
				$('#button_affiche').prop('disabled', false);
				output1 = 60;
				output2 = 90;
				break;
				case '30" x 15"':
				$('#button_affiche').prop('disabled', false);
				output1 = 70;
				output2 = 115;
				break;
				case '36" x 18"':
				$('#button_affiche').prop('disabled', false);
				output1 = 80;
				output2 = 135;
				break;
				case '42" x 21"': 
				$('#button_affiche').prop('disabled', false);
				output1 = 90;
				output2 = 160;		
				break;
				case '48" x 24"':
				$('#button_affiche').prop('disabled', false);
				output1 = 105;
				output2 = 190;
				break;
				case '55" x 28"':
				$('#button_affiche').prop('disabled', false);
				output1 = 120;
				output2 = 240;
				break;
				case '60" x 30"':
				$('#button_affiche').prop('disabled', false);
				output1 = 130;
				output2 = 305;
				break;
				case '70" x 35"':
				$('#button_affiche').prop('disabled', false);
				output1 = 160;
				output2 = 425;
				break;
				case '90" x 45"':
				$('#button_affiche').prop('disabled', true);
				output2 = 590;
				break;

		    }
				if(!output1){
					document.getElementById("bouton1").innerHTML = "Indisponible";
				}else{
					document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";
				}
				document.getElementById("bouton2").innerHTML = output2 + 30;
		});
		break;

		//carre
		case 'carre':
				var output1;
		output1 = 50;
		document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";;

		var output2;
		output2 = 80;
		document.getElementById("bouton2").innerHTML = output2 + 30;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
		    	case '16" x 16"': 
		    	$('#button_affiche').prop('disabled', false);
				output1 = 50;
				output2 = 80;
				break;
				case '24" x 24"':
				$('#button_affiche').prop('disabled', false);
				output1 = 70;
				output2 = 115;
				break;
				case '30" x 30"':
				$('#button_affiche').prop('disabled', false);
				output1 = 85;
				output2 = 155;
				break;
				case '36" x 36"':
				$('#button_affiche').prop('disabled', false);
				output1 = 100;
				output2 = 200;
				break;
		    }
				if(!output1){
					document.getElementById("bouton1").innerHTML = "Indisponible";
				}else{
					document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";
				}
				document.getElementById("bouton2").innerHTML = output2 + 30;
		});
		break;

		//aerien
		case 'aerien':
				var output1;
		output1 = 45;
		document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";;

		var output2;
		output2 = 70;
		document.getElementById("bouton2").innerHTML = output2 + 30;

	  	$('#formats').change(function() {
		    $('.snipcart-add-item').data('item-custom1-value', $(this).val());
		    var output1;
		    var output2;
		    switch($(this).val()){
		    	case '16" x 9"': 
		    	$('#button_affiche').prop('disabled', false);
				output1 = 45;
				output2 = 70;
				break;
				case '24" x 13"':
				$('#button_affiche').prop('disabled', false);
				output1 = 60;
				output2 = 90;
				break;
				case '30" x 17"':
				$('#button_affiche').prop('disabled', false);
				output1 = 70;
				output2 = 115;
				break;
				case '36" x 20"':
				$('#button_affiche').prop('disabled', false);
				output1 = 80;
				output2 = 140;
				break;
				case '42" x 24"': 
				$('#button_affiche').prop('disabled', false);
				output1 = 95;
				output2 = 175;		
				break;
				case '48" x 27"':
				$('#button_affiche').prop('disabled', false);
				output1 = 105;
				output2 = 205;
				break;
				case '55" x 31"':
				$('#button_affiche').prop('disabled', false);
				output1 = 125;
				output2 = 255;
				break;
				case '60" x 34"':
				$('#button_affiche').prop('disabled', false);
				output1 = 140;
				output2 = 330;
				break;
		    }
				if(!output1){
					document.getElementById("bouton1").innerHTML = "Indisponible";
				}else{
					document.getElementById("bouton1").innerHTML = (output1 + 30).toString() + "$ &middot; Papier affiche";
				}
				document.getElementById("bouton2").innerHTML = output2 + 30;
		});
		break;
	}
});