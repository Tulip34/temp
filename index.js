const io=require('socket.io')(8000)
const users={};
io.on('connection',socket=>{
    console.log("New user",myname)
    socket.on('new-user-joined',myname=>{
        users[socket.id]=myname;
        socket.broadcast.emit('user-joined',myname);
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,myname:users[socket.id]})
    });
})