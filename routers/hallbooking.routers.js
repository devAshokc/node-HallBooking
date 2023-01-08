import express from 'express'
import {
    createRoom,
    roomBooking,
    createBooking
} from '../service/hallbooking.service.js'

const router = express.Router()
router.post('/create-room', async function (request, response) {
    const data = request.body
    const result = await createRoom(data)
    response.send(result)
    console.log(result)
})
router.post('/create-booking', async function (request, response) {
    const { roomId } = request.body
    const data = request.body
    const existUser = await roomBooking(roomId)
    if (existUser) {
        response.send("The Rooms you're looking for are already booked.")
    } else {
        const result = await createBooking(data)
        response.send(result)
        console.log(result)
    }
})

export default router