$document.jQuery(document).ready(function($) {

  $('button').click(function(){

var turquoise = '#1abc9c'
var greensea = '#16a085'
var sunflower = '#f1c40f'
var orange = '#f39c12'
var emerald = '#2ecc71'
var nephritis = '#27ae60'
var carrot = '#e67e22'
var pumpkin = '#d35400'
var peterriver = '#3498db'
var belizehole = '#d35400'
var alizarin = '#d35400'
var pomegranate = '#c0392b'
var amethyst = '#9b59b6'
var wisteria = '#8e44ad'
var clouds = '#ecf0f1'
var wetasphalt = '#34495e'
var midnightblue = '#2c3e50'
var concrete = '#95a5a6'
var asbestos = '#7f8c8d'


var colorChoice = $(# /*the color selected from the drop-down menu*/)

var featureChoice = $(# /*the landscape feature selected from the drop-down menu*/)

// featureChoice potential options: equal road, road.local, road.aterial, poi, poi.business,

    var styles = [
    {
      stylers: [
        { hue: colorChoice }
      ]
    },{
      featureType: featureChoice,
      elementType: "geometry",
      stylers: [
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
    ]
  }
];

map.setOptions({styles: styles});

  }); //click
}); //document ready
