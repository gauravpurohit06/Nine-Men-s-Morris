var j=0;
var i=0;
stage.on('click', function(e) {
    var node = e.target;
    var isCircle = (node.className === 'Circle'); 
    if (isCircle) 
    {
        var nodeID = node.id();
        var xCoord = boardPoints[nodeID[1]][nodeID[0]].x;
        var yCoord = boardPoints[nodeID[1]][nodeID[0]].y;
        if(i%2==0)move(p1Pieces[j],xCoord,yCoord);
        else 
        {
            move(p2Pieces[j],xCoord,yCoord);
            j=j+1;
        } 
        i=i+1;            
    }
});