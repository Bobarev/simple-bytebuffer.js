const TypeBytesLength = {
  BYTE: 1,
  BOOLEAN: 1,
  SHORT: 2,
  INTEGER: 4,
  FLOAT: 4
}

class ByteBuffer {
  dataview = null
  cursor = 0

  constructor (data) {
    this.dataview = new DataView(data)
  }

  getByte () {
    let val = this.dataview.getInt8(this.cursor)
    this.cursor += TypeBytesLength.BYTE
    return val
  }

  writeByte (val) {
    this.dataview.setInt8(this.cursor, val)
    this.cursor += TypeBytesLength.BYTE
  }

  getShort () {
    let val = this.dataview.getInt16(this.cursor)
    this.cursor += TypeBytesLength.SHORT
    return val
  }

  writeShort (val) {
    this.dataview.setInt16(this.cursor, val)
    this.cursor += TypeBytesLength.SHORT
  }

  getInteger () {
    let val = this.dataview.getInt32(this.cursor)
    this.cursor += TypeBytesLength.INTEGER
    return val
  }

  writeInteger (val) {
    this.dataview.setInt32(this.cursor, val)
    this.cursor += TypeBytesLength.INTEGER
  }

  getFloat () {
    let val = this.dataview.getFloat32(this.cursor)
    this.cursor += TypeBytesLength.FLOAT
    return val
  }

  writeFloat (val) {
    this.dataview.setFloat32(this.cursor, val)
    this.cursor += TypeBytesLength.FLOAT
  }

  getBoolean () {
    let val = this.dataview.getInt8(this.cursor)
    this.cursor += TypeBytesLength.BOOLEAN
    if (val === 0) return false
    return true
  }

  writeBoolean (val) {
    this.dataview.setInt8(this.cursor, val ? 1 : 0)
    this.cursor += TypeBytesLength.BOOLEAN
  }

  scroll (val) {
    this.cursor += val
  }

  isReadable () {
    return this.cursor < this.dataview.byteLength
  }

  length () {
    return this.dataview.byteLength
  }

  array () {
    return this.dataview.buffer
  }

  static create (size) {
    let arrbuffer = new ArrayBuffer(size)
    return new ByteBuffer(arrbuffer)
  }
}

export default ByteBuffer
