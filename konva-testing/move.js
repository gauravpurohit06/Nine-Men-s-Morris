for(var i=0; i<p1Pieces.length; i++) {
    p1Pieces[i].on('click', bindClick(i));
}

function bindClick(i) {
 return function() {
     console.log("you clicked region number " + i);
 };
}