export async function getAllRoomHeatingPrograms() {
    try {
        const response = await fetch("http://localhost:5000/room-heating-programs");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}