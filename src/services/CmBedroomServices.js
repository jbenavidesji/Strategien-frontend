export async function getAllCmBedroom() {
    try {
        const response = await fetch("http://localhost:5000/cm-bedroom");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}