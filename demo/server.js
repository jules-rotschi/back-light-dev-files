import { Edge } from 'edge.js'
import { createServer } from 'node:http'

const edge = Edge.create()
edge.mount(new URL('./views', import.meta.url))

edge.mount(
  'components',
  new URL('./components/edge', import.meta.url)
)

edge.mount(
  'icons',
  new URL('./icons/edge', import.meta.url)
)

const server = createServer(async (req, res) => {
  const html = await edge.render('home')

  res.setHeader('content-type', 'text/html')
  res.end(html)
})

server.listen(3000)
console.log('Sever is listning on port 3000');