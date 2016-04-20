
/*format.value.toString()*/
     $(document).ready(function() {
     $.boutonType = {
          '11' : $('#affiche-1'),
          '12' : $('#affiche-2'),
          '13' : $('#affiche-3'),
          '14' : $('#affiche-4'),
          '15' : $('#affiche-5'),
          '16' : $('#affiche-6'),
          '21' : $('#roulee-1'),
          '22' : $('#roulee-2'),
          '23' : $('#roulee-3'),
          '24' : $('#roulee-4'),
          '25' : $('#roulee-5'),      
          '26' : $('#roulee-6'),     
          '31' : $('#montee-1'),
          '32' : $('#montee-2'),
          '33' : $('#montee-3'),
          '34' : $('#montee-4'),
          '35' : $('#montee-5'),
          '36' : $('#montee-6'),
          '41' : $('#acrylique-1'),
          '42' : $('#acrylique-2'),
          '43' : $('#acrylique-3'),
          '44' : $('#acrylique-4'),
          '45' : $('#acrylique-5'),
          '46' : $('#acrylique-6'),
        }
      $.each($.boutonType, function() { this.hide(); });
      $.boutonType['11'].show();
      boutonvalue = "0";
        ;

        $('#format').change(function() {
          // hide all
          $.each($.boutonType, function() { this.hide(); });
          // show current
          boutonvalue = "0";
          boutonvalue = type.value+format.value;
          $.boutonType[boutonvalue].show();
        });
          $('#type').change(function() {
          // hide all
          $.each($.boutonType, function() { this.hide(); });
          // show current
          boutonvalue = "0";
          boutonvalue = type.value+format.value;
          $.boutonType[boutonvalue].show();
        });
      });
      