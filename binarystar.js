$(function() {

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

    for (var i=0; i<n; i++) {
      html += '<div class="row group-' + i + '">';
      for (var j=0; j<groups[i].length; j++) {
        html += '<span class="number">' + groups[i][j] + '</span>';
      }
      html += '</div>';
    }

    $('.contents').html(html);

    return groups;
  }
  var x = prompt('the number which you want')
  console.log(generateGroups(x));

});

