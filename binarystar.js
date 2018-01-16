$(function() {

  $(".btn-group :input").on("change",function () {
		generateGroups($(this).val());
  });

	// n is the number of bits.
  function generateGroups(n) {
    var max = 1 << n,
      groups = [],
      html = '';

    for (var i=0; i<n; i++) {
      groups[i] = [];
    }

    for (var i=0; i<max; i++) {
      for (var group = 0; group < n; group++) {
        if (i & (1 << group)) {
          groups[group].push(i);
        }
      }
    }

    // generate html
    for (var i=0; i<n; i++) {
      if (i % 2 == 0) {
        html += '<div class="row">'
      }
      html += '<div class="col-sm-6"><div class="group">';
      html += '<div class="group-title">Group ' + (i+1) + '</div>';
      for (var j=0; j<groups[i].length; j++) {
        html += '<div class="number">' + groups[i][j] + '</div>';
      }
      html += '</div></div>';
      if (i % 2 == 1) {
        html += '</div>'; // row
      }
    }

    // close row if n is odd.
    if (i % 2 == 1) {
      html += '</div>'; // row
    }

    $('.contents').html(html);

    return groups;
  }

  generateGroups(4);


});

