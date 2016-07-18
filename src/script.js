// Your JS goes here

var size = 9;
var start='black';
var random=true;
var colors = [ 'red', 'black' ];

var toggle = 0;

for(var x = 0; x<size; x++) {
    for(var y = 0; y < size; y++) {

        if(toggle === 0) { 
            toggle = 1; 
        } else { 
            toggle = 0;
        }

        if(random) { colors[toggle] = randomColor(); }
        addElement( );

    }

}
    var span = gradient();
    document.body.appendChild(span);


function gradient() {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("style", "background: -webkit-linear-gradient(left top, red, yellow); position:absolute; x:0; y:0; width:99.9%; height:99.9%; opacity: 0.7;");
	return document.body.appendChild(newDiv);
}

function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);

}

function addElement ( ) { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  newDiv.setAttribute("style", "background-color:" + colors[toggle] + "; padding-bottom: 11.1%; width:11.1%; float:left");

  document.body.appendChild(newDiv);
}