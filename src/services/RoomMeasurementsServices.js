export async function getAllRoomMeasurements() {
    try {
        const response = await fetch("http://localhost:5000/room-measurements");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}