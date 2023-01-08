import { client } from '../index.js';

export async function createRoom(data) {
    return await client.db('hallbooking').collection('rooms').insertMany(data);
}
export async function roomBooking(roomId) {
    return await client.db('hallbooking').collection('Booking').findOne({ date: roomId });
}
export async function createBooking(data) {
    return await client.db('hallbooking').collection('Booking').insertOne(data)
}
