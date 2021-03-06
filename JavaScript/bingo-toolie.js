function app () {
  jQuery('<img class="icon" src="/assets/bingo-toolie/glowbo.png" style="width: 64px; height: 64px;"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div>').insertAfter('.quantity input');
      jQuery('.quantity').each(function () {
          var counter = jQuery(this),
          input = counter.find('input[type="number"]'),
          btnUp = counter.find('.quantity-up'),
          btnDown = counter.find('.quantity-down'),
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
              counter.find("input").val(newVal);
              counter.find("input").trigger("change");
          });

          // Decrement button
          btnDown.click(function () {
              var oldValue = parseFloat(input.val());
              if (oldValue <= min) {
                  var newVal = oldValue;
              } else {
                  var newVal = oldValue - 1;
              }
              counter.find("input").val(newVal);
              counter.find("input").trigger("change");
          });

      });

      // Fill appropriate icons for collectibles
      jQuery('.icon').each(function () {
        var glowbo = '/assets/bingo-toolie/glowbo.png';
        var honeycomb = '/assets/bingo-toolie/honeycomb.png';
        var hive = '/assets/bingo-toolie/hive.png';
        var minjo = '/assets/bingo-toolie/minjo.png';
        var cheatopage = '/assets/bingo-toolie/cheato-page.png';
        var treble = '/assets/bingo-toolie/treble.png';
        var mumbopad = '/assets/bingo-toolie/mumbo-pad.png';
        var boss = '/assets/bingo-toolie/boss.png';
        var train = '/assets/bingo-toolie/train.png';
        var egg = '/assets/bingo-toolie/egg.png';
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
          case 'train':
            icon.attr('src', train);
            break;
          case 'egg':
            icon.attr('src', egg);
            break;
        }
      });
}

function toggleColor (box) {
  if (box.checked == true) {
    box.parentNode.style.color = "#FB2B31";
  }
  else {
    box.parentNode.style.color = "";
  }
}

function wipe () {
  jQuery('.quantity').each(function () {
    var counter = jQuery(this);
    input = counter.find('input[type="number"]');
    min = input.attr('min');
    counter.find("input").val(min);
    counter.find("input").trigger("change");
  });
  jQuery('input:checkbox').each(function () {
    var checkbox = jQuery(this);
    checkbox.prop("checked", false);
    checkbox.parent().css('color', '');
  });
  jQuery('textarea#notes').val('');
  console.log('Cleared all fields');
}
