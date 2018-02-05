// const dns = require("dns");
// dns.lookup('iana.org', (err, address, family) => {
//   console.log("IP 地址：%j, 地址：IPv%s", address, family)
// })

const buf1 = Buffer.alloc(4)
const buf2 = Buffer.alloc(4, 1)
const buf3 = Buffer.allocUnsafe(4).fill(1)

const buf4 = Buffer.from([1, 2, 3])

console.log(buf1, buf2, buf3, buf4.toString())
