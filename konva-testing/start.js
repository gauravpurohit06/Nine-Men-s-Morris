var ind=0;
var pr=0;
function CheckEvent2(anim2,ValPos,node){
    var cc=0;
    var nodeID=node.id();
    stage.on('click.event2', function(e2) {
        var node2= e2.target;
        var isCircle2 = (node2.className === 'Circle'); 
        if (isCircle2) 
        {
            var nodeID2 = node2.id();
            if(nodeID2 == nodeID)
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
                cc=+1+ CheckMill(nodeID2);
                if(cc==2)
                {
                    stage.off('click.event2');
                    CheckEvent3(nodeID[0]);
                }
            }
        }
        if(cc==1)
        {
            stage.off('click.event2');
            CheckEvent1();
        }
        });
}

var rn=0;
var rp=0;
function CheckEvent3(ch){
    stage.on('click.event3', function(e3) {
        var node3= e3.target;
        var isCircle3 = (node3.className === 'Circle'); 
        if (isCircle3) 
        {
            var nodeID3=node3.id();
            console.log('hIam fodu ');
            console.log(nodeID3);
            if(nodeID3.length==2 || nodeID3[0]==ch)window.alert("Invalid Move");
            else 
            {
                if(nodeID3.length == 4)boardStatus[nodeID3[3]][nodeID3[2]]='X';
                if(ch=='N')
                {
                    var x= 0.15*width
                    var y= 0.25*height + (rn)*30
                    rn=+rn+1;
                }
                else 
                {
                    var x= 0.8*width
                    var y= 0.25*height + (rp)*30
                    rp=+rp+1;
                }
                node3.setX(x);
                node3.setY(y);
                anim.start();
                stage.off('click.event3');
                CheckEvent1();
            }
        }
    });
}

function CheckEvent1(){
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
                CheckEvent2(anim2,ValPos,node);
            }
            else if(ind<9 && (nodeID.length==2))
            {            
                if(pr%2==0)move(p1Pieces[ind],nodeID);
                else 
                {
                    move(p2Pieces[ind],nodeID);
                    ind=+ind+1;
                } 
                if(CheckMill(nodeID))
                {
                    stage.off('click.event1');
                    if(pr%2==0)CheckEvent3('N');
                    else CheckEvent3('P');
                }
                pr=+pr+1;
            }            
        }
    });
}

CheckEvent1();
