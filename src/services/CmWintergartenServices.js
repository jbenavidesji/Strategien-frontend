export async function getAllCmWintergarten() {
    try {
        const response = await fetch("http://localhost:5000/cm-wintergarten");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}