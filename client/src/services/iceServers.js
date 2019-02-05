export const setIceServers = (connection) => {
	connection.iceServers = [ { url: 'stun:global.stun.twilio.com:3478?transport=udp' },
     { url: 'turn:global.turn.twilio.com:3478?transport=udp',
       username:
        '19d917474204c76a85661db5d78e57c0b89dd9a32bc1790d01b4c64bcf4f4fef',
       credential: 'FtNwZeRfgXmoiXiNkFFmrp+G+kTqcxYVobYLdRekB0E=' },
     { url: 'turn:global.turn.twilio.com:3478?transport=tcp',
       username:
        '19d917474204c76a85661db5d78e57c0b89dd9a32bc1790d01b4c64bcf4f4fef',
       credential: 'FtNwZeRfgXmoiXiNkFFmrp+G+kTqcxYVobYLdRekB0E=' },
     { url: 'turn:global.turn.twilio.com:443?transport=tcp',
       username:
        '19d917474204c76a85661db5d78e57c0b89dd9a32bc1790d01b4c64bcf4f4fef',
       credential: 'FtNwZeRfgXmoiXiNkFFmrp+G+kTqcxYVobYLdRekB0E=' } ]
	return connection
}