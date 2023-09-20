export async function getAllCmKitchen() {
    try {
        const response = await fetch("http://localhost:5000/cm-kitchen");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}