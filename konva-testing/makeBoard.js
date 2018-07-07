   var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: 'container',
      width: width,
      height: height
    });

    var layer = new Konva.Layer();

    
    var rectDim = [];
    var lineDim = [];
    var test = {'x1':width/2 - 100,'y1':height/2 -100,'x2':width/2 + 50,'y2': height/2 + 50};
    rectDim.push(test);
    var test = {'x1':width/2 - 150,'y1':height/2 -150,'x2':width/2 + 100,'y2': height/2 + 100};
    rectDim.push(test);
    var test = {'x1':width/2 - 200,'y1':height/2 -200,'x2':width/2 + 150,'y2': height/2 + 150};
    rectDim.push(test);

    var test = {'x1':(rectDim[0].x1+rectDim[0].x2)/2,'y1':rectDim[0].y1,'x2':(rectDim[0].x1+rectDim[0].x2)/2,'y2': rectDim[2].y1};
    lineDim.push(test);
    var test = {'x1':rectDim[0].x1,'y1':(rectDim[0].y1+rectDim[0].y2)/2,'x2':rectDim[2].x1,'y2': (rectDim[0].y1+rectDim[0].y2)/2};
    lineDim.push(test);
    var test = {'x1':rectDim[0].x2,'y1':(rectDim[0].y1+rectDim[0].y2)/2,'x2':rectDim[2].x2,'y2': (rectDim[0].y1+rectDim[0].y2)/2};
    lineDim.push(test);
    var test = {'x1':(rectDim[0].x1+rectDim[0].x2)/2,'y1':rectDim[0].y2,'x2':(rectDim[0].x1+rectDim[0].x2)/2,'y2': rectDim[2].y2};
    lineDim.push(test);



    var lineArray = [];

    for(i=0;i<4;i++)
    {
    var line = new Konva.Line
      ({
        points: [lineDim[i].x1, lineDim[i].y1, lineDim[i].x2, lineDim[i].y2],
        stroke: 'white',
        strokeWidth: 6,
        lineCap: 'round',
        lineJoin: 'round'
      });
      lineArray.push(line);
      layer.add(line);
    }


    var rectArray = [];

    var colorCircle = '#318ce7';

    for(i=0;i<3;i++)
    {
      var rect = new Konva.Rect
      ({
        x: rectDim[i].x1,
        y: rectDim[i].y1,
        width: rectDim[i].x2 - rectDim[i].x1,
        height: rectDim[i].y2 - rectDim[i].y1,
        stroke: 'white',
        strokeWidth: 6
      });
      rectArray.push(rect);
      layer.add(rect);
    }

    function move(element,x,y,nodeID)
    {
      var ids=element.getAttr('id'); 
      ids=ids[0]+ids[1];
      element.setAttr('id',ids+nodeID);
      console.log(element.id());
    	var anim = new Konva.Animation(function(frame) {
        	element.setX(x);
        	element.setY(y);
    	}, layer);
		anim.start();
    }

    function IncRad(element)
    {
        	element.setAttr('radius',element.getAttr('radius')+5);
    }
    function DecRad(element)
    {
      element.setAttr('radius',element.getAttr('radius')-5);
    }