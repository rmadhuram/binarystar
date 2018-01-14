$(function() {

	// n is the number of bits.
  function generateGroups(n) {
    var max = 1 << n,
      groups = [];

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

    return groups;
  }
  var x = prompt('the number which you want')
  console.log(generateGroups(x));

});

