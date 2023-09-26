export async function getAllRoomActions() {
    try {
        const response = await fetch("http://localhost:5000/room-actions");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}