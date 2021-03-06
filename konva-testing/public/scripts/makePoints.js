    var colorCircle = '#318ce7';

    var boardPoints = [];

    for(i=0;i<3;i++)
    {
       var points =
      { 
          'A' : {'x': rectDim[i].x1, 'y': rectDim[i].y1},          
          'B' : {'x': (rectDim[i].x1+rectDim[i].x2)/2, 'y': rectDim[i].y1},
          'C' : {'x': rectDim[i].x2, 'y': rectDim[i].y1},
          'D' : {'x': rectDim[i].x2, 'y': (rectDim[i].y1+rectDim[i].y2)/2},
          'E' : {'x': rectDim[i].x2, 'y': rectDim[i].y2},
          'F' : {'x': (rectDim[i].x1+rectDim[i].x2)/2, 'y': rectDim[i].y2},
          'G' : {'x': rectDim[i].x1, 'y': rectDim[i].y2},
          'H' : {'x': rectDim[i].x1, 'y': (rectDim[i].y1+rectDim[i].y2)/2}
      }
      boardPoints.push(points);
    }
    var boardCircles=[];
    var boardStatus=[];
    for(i=0;i<3;i++)
    {
          var obj ={};
          var obj2 ={};
          for(j=0;j<=7;j++)
          {
              var chr = String.fromCharCode(65+j);
              var circle = new Konva.Circle
                ({
                  x: boardPoints[i][chr].x,
                  y: boardPoints[i][chr].y,
                  radius: 10,
                  fill: '#00bfff',
                  id:chr+i
                });
                obj[chr]=circle;
                obj2[chr]='X'
                layer.add(circle);
          }
          boardCircles.push(obj);   
          boardStatus.push(obj2); 
    }