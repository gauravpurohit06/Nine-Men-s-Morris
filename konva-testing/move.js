stage.on('mouseover', function(e) {
    var node = e.target;
    console.log(e); 
    var isCircle = (node.className === 'Circle'); 
    if (isCircle) 
    {
        var nodeID = node.id();
        console.log(nodeID);
        var xCoord = boardPoints[nodeID[1]][nodeID[0]].x;
        var yCoord = boardPoints[nodeID[1]][nodeID[0]].y;       
    }
});