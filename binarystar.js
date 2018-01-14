$(function() {
  $("#slider1").roundSlider({
    sliderType: "min-range",
    circleShape: "custom-quarter",
    min: 4,
    max: 8,
    value: 4,
    startAngle: 45,
    editableTooltip: false,
    radius: 300,
    width: 20,
    handleShape: "dot",
    tooltipFormat: "tooltipVal1"
  });

  function tooltipVal1(args) {
    return args + ' bits';
  }
});

