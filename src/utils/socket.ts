import { io } from 'socket.io-client';

export const socket = io(process.env.NEXT_PUBLIC_DEX_SERVICE_WS_URL || '', {
  transports: ['websocket']
});