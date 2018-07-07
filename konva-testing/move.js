var anim = new Konva.Animation(function(frame) {
    anim.stop();
    }, layer);

function move(element,nodeID)
{
    console.log(nodeID);
  var ids=element.getAttr('id'); 
  if(ids.length ===4)boardStatus[ids[3]][ids[2]]='X';
  console.log(ids);

  boardStatus[nodeID[1]][nodeID[0]]=ids[0];
  element.setAttr('id',ids[0]+ids[1]+nodeID);

  var x= boardPoints[nodeID[1]][nodeID[0]].x;
  var y= boardPoints[nodeID[1]][nodeID[0]].y;
  element.setX(x);
  element.setY(y);
  anim.start();
}

function IncRadius(element)
{
    element.setAttr('radius',element.getAttr('radius')+5);
     anim.start();
}

function DecRadius(element)
{
  element.setAttr('radius',element.getAttr('radius')-5);
  anim.start();
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}

function ShowValidMoves(nodeID)
{
    var ch=nodeID[2];
    var num=nodeID[3];
    var ValPos=[];
    
    var next=nextChar(ch);
    if(next>'H')next='A';
    if(boardStatus[num][next]=='X')ValPos.push([num,next]);
    
    var prev=prevChar(ch);
    if(prev<'A')prev='H';
    if(boardStatus[num][prev]=='X')ValPos.push([num,prev]);
    
    var chnum= ch.charCodeAt(0)-'A'.charCodeAt(0);
    if(chnum%2==1)
    {
        var numNext=+num+1;
        if((numNext<=2) && boardStatus[numNext][ch]=='X')ValPos.push([numNext,ch]);

        var numPrev=+num-1;
        if((numPrev>=0) && boardStatus[numPrev][ch]=='X')ValPos.push([numPrev,ch]);
    }
    
    console.log(ValPos.length); 
    var cl=0;
    var anim2 = new Konva.Animation(function(frame) {
        for(var i=0;i<ValPos.length;i++)
        {
            if(cl%25==0)
            {
                if(cl==25)boardCircles[ValPos[i][0]][ValPos[i][1]].setAttr('fill','#e69500');
                else 
                {
                    boardCircles[ValPos[i][0]][ValPos[i][1]].setAttr('fill','#00bfff');
                    cl=0;
                }
            }
        }
        cl=+cl+1;
        }, layer);
    anim2.start();
    return [anim2,ValPos];
}

function CheckValid(nodeID2,ValPos)
{
    if((nodeID2[0]==='P') || (nodeID2[0]==='N'))
    {
        window.alert("InvalidMove");
        return 0;
    }
    for(var i=0;i<ValPos.length;i++)
    {
        if((ValPos[i][0]==nodeID2[1]) && (ValPos[i][1]==nodeID2[0]))return 1; 
    }
    window.alert("InvalidMove");
    return 0;
}

function SetDefColor(ValPos)
{
    for(var i=0;i<ValPos.length;i++)
    {
        boardCircles[ValPos[i][0]][ValPos[i][1]].setAttr('fill','#00bfff');
    }
    anim.start();
}