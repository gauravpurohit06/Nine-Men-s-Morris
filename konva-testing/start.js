var ind=0;
var pr=0;
function futmp(){
    stage.on('click.event1', function(e) {
        var node = e.target;
        var isCircle = (node.className === 'Circle'); 
        if (isCircle) 
        {
            var nodeID = node.id();
            if(nodeID[0]==='P' || nodeID[0]==='N')
            {
                IncRad(node);
                stage.off('click.event1');
                var cc=0;
                stage.on('click.event2', function(e2) {
                var node2= e2.target;
                var isCircle2 = (node2.className === 'Circle'); 
                if (isCircle2) 
                {
                    var nodeID2 = node2.id();
                    console.log(nodeID2);
                    if((nodeID2[0]==='P') || (nodeID2[0]==='N'))window.alert("Already occupied");
                    else 
                    {
                        cc=1;
                        var num=nodeID[1];
                        ch=nodeID[0];
                        var xCoord2 = boardPoints[nodeID2[1]][nodeID2[0]].x;
                        var yCoord2 = boardPoints[nodeID2[1]][nodeID2[0]].y;
                        if(ch==='N')move(p1Pieces[num],xCoord2,yCoord2,nodeID2);
                        else move(p2Pieces[num],xCoord2,yCoord2,nodeID2);
                        DecRad(node);
                    }
                }
                if(cc===1)
                {
                    stage.off('click.event2');
                    futmp();
                }
                });
            }
            else if(ind<9)
            {
                var xCoord = boardPoints[nodeID[1]][nodeID[0]].x;
                var yCoord = boardPoints[nodeID[1]][nodeID[0]].y;
                if(pr%2==0)move(p1Pieces[ind],xCoord,yCoord,nodeID);
                else 
                {
                    move(p2Pieces[ind],xCoord,yCoord,nodeID);
                    ind=ind+1;
                } 
                pr=pr+1;
            }            
        }
    });
}

futmp();
