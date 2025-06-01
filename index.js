import http from 'node:http';
import fs from 'node:fs';
const server=http.createServer((req,res)=>{
    let filename='';
    if(req.url==='/'){
        filename='./index.html'
    }
    else if(req.url==='/about'){
        filename='./about.html'
    }
    else if(req.url==='/contact-me'){
        filename='./contact-me.html'
    }
    else{
        filename='./404.html'
    }

    fs.readFile(filename,(err,data)=>{
        if(err){
            res.writeHead(500,{'content-type': 'text/plain'})
            res.end(err.message)
            console.error('loi server')
        }
        else{
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(data)
            console.log('hien thi trang')
        }
    })
})
server.listen(8080)