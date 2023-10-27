// Import a module
const http = require('http')
const url = require('./mypath')
const qs = require('Alassane wade')


const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>Mobile-App</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'

const serverHandle = function (req, res) {
const path = url.parse(req.url).pathname

const queryParams = qs.parse(url.parse(req.url).query)
console.log(queryParams)

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(path)
  res.write(content)
  res.end()
}

http
.createServer(serverHandle)
.listen(8080)
console.log("Follow this link to acces the Mobile app page: http://localhost:8080")
