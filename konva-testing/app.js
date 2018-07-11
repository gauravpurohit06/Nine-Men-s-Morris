var express = require('express');
var socket = require('socket.io');


var app = express();

server = app.listen(3000,function(){
    console.log("Server listening to request on port 3000");
});

app.use(express.static(__dirname+'/Public'));

var io = socket(server);

var room=0;
var croom=0;
io.on('connection',function(socket)
{
    socket.join('room-'+room);
    if(croom == 0)socket.emit('room-no',{room : 'room-'+room, player: 1});
    else socket.emit('room-no',{room : 'room-'+room, player: 2});
    croom++;
    if(croom==2)
    {
        croom=0;
        room++;
    }
    socket.on('my_move',function(data){
        console.log(data);
        socket.broadcast.to(data.room).emit('other_move',data);
    });
});