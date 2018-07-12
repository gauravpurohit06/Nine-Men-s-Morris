var anim = new Konva.Animation(function(frame) {
    anim.stop();
    }, layer);

function move(element,nodeID,caller)
{
  console.log(nodeID);
  var ids = element.getAttr('id'); 
  if(ids.length == 4)boardStatus[ids[3]][ids[2]]='X';
  console.log(ids);

  boardStatus[nodeID[1]][nodeID[0]]=ids[0];
  element.setAttr('id',ids[0]+ids[1]+nodeID);

  var x= boardPoints[nodeID[1]][nodeID[0]].x;
  var y= boardPoints[nodeID[1]][nodeID[0]].y;
  element.setX(x);
  element.setY(y);
  anim.start();
  var isMill =0;
  if(caller == 'event1')
  {
      if(CheckMill(nodeID))
      {
          isMill =1;
      }
  }
  if(caller == 'event2')
  {
      DecRadius(element);
      if(CheckMill(nodeID))
      {
          isMill =1;
      }
  }
  if(caller != 'socket')
  {
     check=0;
    var SerData={
        id : ids,
        move : nodeID,
        room : room_num,
        isMill : isMill
    };
    console.log(SerData);
    socket.emit('my_move',SerData);
  }
  if(isMill == 1)
  {
        setTimeout(function(){
            CheckEvent3(ids[0]);
        },2000);
  }
}

function moveout(node3, x, y,caller)
{
    var nodeID3 = node3.id();
    boardStatus[nodeID3[3]][nodeID3[2]]='X';
    node3.setX(x);
    node3.setY(y);
    anim.start();
    if(caller != 'socket')
    {
      var SerData={
          id : nodeID3,
          x : x,
          y : y,
          room : room_num,
          isMill : 2
      };
      console.log(SerData);
      socket.emit('my_move',SerData);
    }
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
    var ch=String.fromCharCode(c.charCodeAt(0) + 1);
    if(ch>'H')return 'A';
    return ch;
}
function prevChar(c) {
    var ch=String.fromCharCode(c.charCodeAt(0) - 1);
    if(ch <'A')return 'H';
    return ch;
}

function ShowValidMoves(nodeID)
{
    var ch=nodeID[2];
    var num=nodeID[3];
    var ValPos=[];
    
    var next=nextChar(ch);
    if(boardStatus[num][next]=='X')ValPos.push([num,next]);
    
    var prev=prevChar(ch);
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
        window.alert("Invalid Move");
        return 0;
    }
    for(var i=0;i<ValPos.length;i++)
    {
        if((ValPos[i][0]==nodeID2[1]) && (ValPos[i][1]==nodeID2[0]))return 1; 
    }
    window.alert("Invalid Move");
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

function CheckMill(nodeID2)
{
    var ch=nodeID2[0]; 
    var num=nodeID2[1];
    var chnum= ch.charCodeAt(0)-'A'.charCodeAt(0);
    if(chnum%2==0)
    {
        if((boardStatus[num][ch]==boardStatus[num][nextChar(ch)]) && (boardStatus[num][ch]==boardStatus[num][nextChar(nextChar(ch))]))
        {
            return 1;
        }
        if((boardStatus[num][ch]==boardStatus[num][prevChar(ch)]) && (boardStatus[num][ch]==boardStatus[num][prevChar(prevChar(ch))]))
        {
            return 1;
        }
    }
    else 
    {
        if((boardStatus[num][ch]==boardStatus[num][nextChar(ch)]) && (boardStatus[num][ch]==boardStatus[num][prevChar(ch)]))
        {
            return 1;
        }
        if((boardStatus[0][ch]==boardStatus[1][ch]) && (boardStatus[1][ch]==boardStatus[2][ch]))
        {
            return 1;
        }
    }
    return 0;
}