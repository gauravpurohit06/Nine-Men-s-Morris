var socket = io.connect('http://localhost:3000');

var room_num;
var player;
socket.on('room-no',function(data){
    room_num = data.room;
    player = data.player;
    if(player == 1)CheckEvent1();
    console.log('your player name:' +player);
    console.log('Your room number is:' +room_num);
});

socket.on('other_move',function(data){
    var id = data.id;
    var element;
    if(id[0]=='P')element = p2Pieces[id[1]];
    else element = p1Pieces[id[1]];
    console.log('mill id:' +data.isMill);

    if(data.isMill !=2)move(element,data.move,'socket');
    else moveout(element,data.x,data.y,'socket');
    if(data.isMill != 1)CheckEvent1();
});