var Http=require('http');
var FS=require('fs');

var server=Http.createServer(function(req,res){

    if(req==url(`/`)){

        asynchronous   system 

        fs.readFile('home.html',function(error,data){

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });

        //synchronous readfile system 

        // var mydata=fs.readFileSync('home.html','welcome to java script');
        // res.writeHead(200,{'Content-Type':'text/html'});
        // res.write(mydata);
        // res.end();

        //asynchronous writefile system
        fs.writeFile('demo.txt','Hellow World',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File write success");
                res.end();
            }
            
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("file not success");
                res.end();
            }

            
        });

    }

});
server.listen("4040");
console.log("Server run success");