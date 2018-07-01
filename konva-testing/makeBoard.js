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


    var p1Pieces=[];
    var p2Pieces=[];

    for(i=0;i<9;i++)
    {
       var circle = new Konva.Circle({
        x: 0.1*width + i*30,
        y: 0.4*height + (i%3)*30,
        radius: (width+height)/135,
           fillRadialGradientStartPoint: 0,
            fillRadialGradientStartRadius: 0,
            fillRadialGradientEndPoint: 0,
            fillRadialGradientEndRadius: (width+height)/135,
            fillRadialGradientColorStops: [0, '#87ceeb',1,'#45b3e0'],shadowColor: 'black',
            shadowBlur: 0,
            shadowOffset: {x : 5, y : 8},
            shadowOpacity: 0.5
      });
       layer.add(circle);
       p1Pieces.push(circle);
       p1Pieces[i].on('click', function (){ alert(i+'th Listener'); });
    }

        for(i=0;i<9;i++)
    {
       var circle = new Konva.Circle({
        x: 0.7*width + i*30,
        y: 0.4*height + (i%3)*30,
        radius: (width+height)/135, 
	    fillRadialGradientStartPoint: 0,
	    fillRadialGradientStartRadius: 0,
	    fillRadialGradientEndPoint: 0,
	    fillRadialGradientEndRadius: (width+height)/135,
	    fillRadialGradientColorStops: [0, '#CD5C5C', 1, '#DC143C'],
	    shadowColor: 'black',
            shadowBlur: 0,
            shadowOffset: {x : 5, y : 8},
            shadowOpacity: 0.5

      });
       layer.add(circle);
       p1Pieces.push(circle);
    }


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
    var color = '#318ce7';

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

       var circle = new Konva.Circle({
        x: rectDim[i].x1,
        y: rectDim[i].y1,
        radius: 6,
        fill: colorCircle
      });
       layer.add(circle);

       //circle.on('click', function (){ alert('First Listener'); });

        
        var circle = new Konva.Circle({
        x: (rectDim[i].x1+rectDim[i].x2)/2,
        y: rectDim[i].y1,
        radius: 6,
        fill: colorCircle
      });       
        layer.add(circle);
        
        var circle = new Konva.Circle({
        x: (rectDim[i].x1+rectDim[i].x2)/2,
        y: rectDim[i].y2,
        radius: 6,
        fill: colorCircle
      });
        layer.add(circle);
        
        var circle = new Konva.Circle({
        x: rectDim[i].x1,
        y: (rectDim[i].y1+rectDim[i].y2)/2,
        radius: 6,
        fill: colorCircle
      });
        layer.add(circle);
        
        var circle = new Konva.Circle({
        x: rectDim[i].x2,
        y: (rectDim[i].y1+rectDim[i].y2)/2,
        radius: 6,
        fill: colorCircle
      });
       layer.add(circle);
        
        var circle = new Konva.Circle({
        x: rectDim[i].x1,
        y: rectDim[i].y2,
        radius: 6,
        fill: colorCircle
      });
       layer.add(circle);
        
        var circle = new Konva.Circle({
        x: rectDim[i].x2,
        y: rectDim[i].y1,
        radius: 6,
        fill: colorCircle
      });
       layer.add(circle);
        
        var circle = new Konva.Circle({
        x: rectDim[i].x2,
        y: rectDim[i].y2,
        radius: 6,
        fill: colorCircle
      });
       layer.add(circle);
    }


    var imageObj = new Image();
    imageObj.onload = function() {

    var bgr = new Konva.Image({
        image: imageObj,
        x: rectDim[2].x1,
        y: rectDim[2].y1,
                    shadowBlur: 0,
            shadowOffset: {x : 15, y : 15},
            shadowOpacity: 0.5,

        width: rectDim[2].x2 - rectDim[2].x1,
        height: rectDim[2].y2 - rectDim[2].y1
      });

      layer.add(bgr);
      bgr.moveToBottom();
      stage.add(layer);
    };
    imageObj.src = '/NMM/konva-testing/assets/chalk.png';

 
 