/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/service/',
    bare: 'https://bear.hop.sh/',


    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',