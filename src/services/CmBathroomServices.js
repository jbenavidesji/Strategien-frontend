export async function getAllCmBathroom() {
    try {
        const response = await fetch("http://localhost:5000/cm-bathroom");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}