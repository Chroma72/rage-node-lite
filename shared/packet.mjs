export default Packet {

  constructor (opcode, size) {
    let buffer = new ArrayBuffer(1 + size)
    this.view = new DataView(buffer)
    this.view.setUint8(0, opcode)
  }
  
  static fromData(buffer) {
    let packet = Object.create(this.prototype)
    packet.view = (!buffer.buffer) ? new DataView(buffer) : new DataView(buffer.buffer)
    return packet
  }
  
  get opcode() {
    return this.view.getUint8(0)
  }
  
  get payload() {
    return this.view.buffer
  }
  
  writeUint8(offset, value..) {
  
  }
}
