import express from 'express'
import path from 'path'
import geckos from '@geckos.io/server'

const __dirname = path.resolve()

const io = geckos()
io.listen()
io.onConnection(channel => {
  
  io.onRaw(data => {
    
    let packet = Packet.fromClientData(data)
    
    switch (packet.opcode) {
      case 0x01:
        break;
        
      case 0x02:
        break;
        
      default:   
    }
    
    
    
  }
  
})
