    var p1Pieces=[];
    var p2Pieces=[];

    for(i=0;i<9;i++)
    {
       var circle = new Konva.Circle
       ({
          x: 0.25*width,
          y: 0.25*height + (i)*30,
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
    }

    for(i=0;i<9;i++)
    {
       var circle = new Konva.Circle
       ({
          x: 0.7*width,
          y: 0.25*height + (i)*30,
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
        p2Pieces.push(circle);
    }



    var imageObj = new Image();

    imageObj.onload = function() {

    var bgr = new Konva.Image({
        image: imageObj,
        x: rectDim[2].x1,
        y: rectDim[2].y1,
        width: rectDim[2].x2 - rectDim[2].x1,
        height: rectDim[2].y2 - rectDim[2].y1,
        shadowBlur: 0,
        shadowOffset: {x : 15, y : 15},
        shadowOpacity: 0.5,        
      });
      layer.add(bgr);
      bgr.moveToBottom();
      stage.add(layer);
    };

    imageObj.src = '/NMM/konva-testing/assets/chalk.png';

    stage.on('click', function(e) {
        var node = e.target;
        var isCircle = (node.className === 'Circle'); 
        if (isCircle) 
        {
            var nodeID = node.id();
            var xCoord = boardPoints[nodeID[1]][nodeID[0]].x;
            var yCoord = boardPoints[nodeID[1]][nodeID[0]].y;
            move(p1Pieces[0],xCoord,yCoord);              
        }
    });