var ind=0;
var pr=0;
function CheckEvent2(anim2,ValPos,node){
    console.log('welcome to event 2');
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
                stage.off('click.event2');  
                anim2.stop();
                SetDefColor(ValPos);
                DecRadius(node);
                CheckEvent1();
            }
            else if(CheckValid(nodeID2,ValPos))
            {
                stage.off('click.event2');        
                anim2.stop();
                SetDefColor(ValPos);
                var num=nodeID[1];
                if(nodeID[0]==='N')move(p1Pieces[num],nodeID2,'event2');
                else move(p2Pieces[num],nodeID2,'event2');
            }
        }
        });
}

var rn=0;
var rp=0;
function CheckEvent3(ch){
    console.log('event 3 started');
    stage.on('click.event3', function(e3) {
        var node3= e3.target;
        var isCircle3 = (node3.className === 'Circle'); 
        if (isCircle3) 
        {
            var nodeID3=node3.id();
            console.log('hIam fodu don');
            console.log(nodeID3);
            if(nodeID3.length==2 || nodeID3[0]==ch)window.alert("Invalid  idiot Move");
            else 
            {
                stage.off('click.event3');
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
                moveout(node3,x,y);
            }
        }
    });
}

function CheckEvent1(){
    console.log('welcome to event 1');
    stage.on('click.event1', function(e) {
        var node = e.target;
        console.log(node);
        var isCircle = (node.className === 'Circle'); 
        if (isCircle) 
        {
            var nodeID = node.id();
            if(((player ==2 && nodeID[0]==='P')|| (player ==1 && nodeID[0]==='N')) && ind==9)
            {
                stage.off('click.event1');

                IncRadius(node);
                var AnimValPos=ShowValidMoves(nodeID);
                anim2 = AnimValPos[0];
                ValPos = AnimValPos[1];
                CheckEvent2(anim2,ValPos,node);
            }
            else if(ind<9 && (nodeID.length==2) && nodeID[0]!='P' && nodeID[0]!='N')
            {            
                stage.off('click.event1');
                if(player == 1)move(p1Pieces[ind],nodeID,'event1');
                else move(p2Pieces[ind],nodeID,'event1');
                ind=+ind+1;
            }            
        }
    });
}

