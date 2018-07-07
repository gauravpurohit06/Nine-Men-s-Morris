var ind=0;
var pr=0;
function CheckEvents(){
    stage.on('click.event1', function(e) {
        var node = e.target;
        var isCircle = (node.className === 'Circle'); 
        if (isCircle) 
        {
            var nodeID = node.id();
            if((nodeID[0]==='P' || nodeID[0]==='N') && ind==9)
            {
                stage.off('click.event1');

                IncRadius(node);
                var AnimValPos=ShowValidMoves(nodeID);
                anim2 = AnimValPos[0];
                ValPos = AnimValPos[1];

                var cc=0;

                stage.on('click.event2', function(e2) {
                var node2= e2.target;
                var isCircle2 = (node2.className === 'Circle'); 
                if (isCircle2) 
                {
                    var nodeID2 = node2.id();
                    if(nodeID2===nodeID)
                    {
                        anim2.stop();
                        SetDefColor(ValPos);
                        DecRadius(node);
                        cc=1;
                    }
                    else if(CheckValid(nodeID2,ValPos))
                    {
                        anim2.stop();
                        SetDefColor(ValPos);
                        cc=1;
                        var num=nodeID[1];
                        if(nodeID[0]==='N')move(p1Pieces[num],nodeID2);
                        else move(p2Pieces[num],nodeID2);
                        DecRadius(node);
                    }
                }
                if(cc==1)
                {
                    stage.off('click.event2');
                    CheckEvents();
                }
                });
            }
            else if(ind<9)
            {
                
                if(pr%2==0)move(p1Pieces[ind],nodeID);
                else 
                {
                    move(p2Pieces[ind],nodeID);
                    ind=+ind+1;
                } 
                pr=+pr+1;
            }            
        }
    });
}

CheckEvents();
