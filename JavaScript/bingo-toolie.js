function app () {
  jQuery('<img class="icon" src="/images/bingo-toolie/glowbo.png" style="width: 64px; height: 64px;"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div>').insertAfter('.quantity input');
      jQuery('.quantity').each(function () {
          var spinner = jQuery(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.quantity-up'),
          btnDown = spinner.find('.quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');

          // Increment button
          btnUp.click(function () {
              var oldValue = parseFloat(input.val());
              if (oldValue >= max) {
                  var newVal = oldValue;
              } else {
                  var newVal = oldValue + 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
          });

          // Decrement button
          btnDown.click(function () {
              var oldValue = parseFloat(input.val());
              if (oldValue <= min) {
                  var newVal = oldValue;
              } else {
                  var newVal = oldValue - 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
          });

      });

      // Fill appropriate icons for collectibles
      jQuery('.icon').each(function () {
        var glowbo = '/images/bingo-toolie/glowbo.png';
        var honeycomb = '/images/bingo-toolie/honeycomb.png';
        var hive = '/images/bingo-toolie/hive.png';
        var minjo = '/images/bingo-toolie/minjo.png';
        var cheatopage = '/images/bingo-toolie/cheato-page.png';
        var treble = '/images/bingo-toolie/treble.png';
        var mumbopad = '/images/bingo-toolie/mumbo-pad.png';
        var boss = '/images/bingo-toolie/boss.png';
        var icon = jQuery(this);
        switch ((icon).closest('.counter').attr('id')) {
          case 'glowbo':
            icon.attr('src', glowbo);
            break;
          case 'honeycomb':
            icon.attr('src', honeycomb);
            break;
          case 'hive':
            icon.attr('src', hive);
            break;
          case 'minjo':
            icon.attr('src', minjo);
            break;
          case 'cheato-page':
            icon.attr('src', cheatopage);
            break;
          case 'treble':
            icon.attr('src', treble);
            break;
          case 'mumbo-pad':
            icon.attr('src', mumbopad);
            break;
          case 'boss':
            icon.attr('src', boss);
            break;
        }
      });
}
