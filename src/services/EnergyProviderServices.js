export async function getAllHints() {
    try {
        const response = await fetch("http://localhost:5000/energy-provider");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}