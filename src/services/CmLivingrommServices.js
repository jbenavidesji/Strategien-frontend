export async function getAllCmLivingroom() {
    try {
        const response = await fetch("http://localhost:5000/cm-livingroom");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}