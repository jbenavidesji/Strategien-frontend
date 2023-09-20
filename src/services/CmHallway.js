export async function getAllCmHallway() {
    try {
        const response = await fetch("http://localhost:5000/cm-hallway");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}