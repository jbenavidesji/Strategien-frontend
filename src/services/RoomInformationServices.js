export async function getAllRoomInformation() {
    try {
        const response = await fetch("http://localhost:5000/room-information");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}