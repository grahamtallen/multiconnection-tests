import {ICE_SERVERS} from '../config'

export const setIceServers = (connection) => {
	connection.iceServers = ICE_SERVERS
	return connection
}