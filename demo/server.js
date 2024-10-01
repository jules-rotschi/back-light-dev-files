import { Edge } from 'edge.js'
import { createServer } from 'node:http'
import { readFileSync } from 'node:fs'

const edge = Edge.create()
edge.mount(new URL('./views', import.meta.url))

edge.mount(
  'components',
  new URL('../ui-kits/edge', import.meta.url)
)

edge.mount(
  'icons',
  new URL('../icons/edge', import.meta.url)
)

const server = createServer(async (req, res) => {
  console.log(req.url);
  
  if (req.url === '/test.css') {
    const cssFile = readFileSync('demo/test.css');
    res.setHeader("Content-Type", "text/css");
    res.end(cssFile);
  } else {
    const html = await edge.render('home')
    res.setHeader('content-type', 'text/html')
    res.end(html)
  }
})

server.listen(3000)
console.log('Sever is listning on port 3000');