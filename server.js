var StaticServer = require("static-server");
var server = new StaticServer({
    rootPath:'./dist',
    port:3000
});

server.start(function (){
    console.log('Starting server at port ' + server.port)
})