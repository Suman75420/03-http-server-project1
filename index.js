const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer(function(req, res){
    const method = req.method;
    const path = req.url;

    const log = `\n[${Date.now()}]: ${method} ${path}`;
    fs.appendFileSync('log.txt',log, 'utf-8');

    switch(method) {
        case 'GET': {
    
        switch(path) {
        case '/':
        res.writeHead(200);
        return res.end(`hello from the server`);
        
        case '/contact-us':
        res.writeHead(200);
        return res.end(`contact on -   phone: 6203056609 OR email : sia62030@gmial.com`);

        case '/tweet' : 
        return res.writeHead(200).end('tweet1\ntweet2\ntweet3\ntweet4');

        }
        }
        break;
        case 'POST' : {
           switch(path) {
             case '/tweet' :
                return res.writeHead(201).end('your tweet was created')
           }
        }
    }
    return res.writeHead(404).end('you are lost')

})

server.listen(8000, () => console.log(`Http server is running on port 8000`));
