export async function getAllCmBedroom2() {
    try {
        const response = await fetch("http://localhost:5000/cm-bedroom-2");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}