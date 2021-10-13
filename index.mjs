import express from 'express'
import path from 'path'
import geckos from '@geckos.io/server'
import date from 'date-and-time'
import Packet from './public/js/mod/packet.mjs'

const __dirname = path.resolve()
const app = express()
app.use('/', express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.listen(3000, () => {
  clog(`Web server listening on port 3000.`)
})

let clients = {}

const io = geckos()
io.listen()
io.onConnection(channel => {
  
  clients[channel.id] = { id: channel.id }
  
  channel.onRaw(data => {
    
    let packet = Packet.fromClientData(data)
    
    switch (packet.opcode) {
        
      case 0x01:
        break;
        
      case 0x02:
        break;
        
      default:
        
    }

  })
  
  // client disconnected
  channel.onDisconnect(reason => {
    delete players[guid];
    channel.raw.broadcast.emit(0x66, guid, { reliable: true });
    let code = reason.toUpperCase()
    clog(`Player [${guid}] left the arena. [${code}]`)
  })

})
  

  
// console.log replacement with date and time
function clog(str) {
  let now = new Date()
  let dateTime = date.format(now, 'YYYY-MM-DD[@]HH:mm:ss')
  console.log('[' + dateTime + '] ' + str)
}
