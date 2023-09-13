export async function getAllSavings() {
    try {
        const response = await fetch("http://localhost:5000/consume-energy-germany");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}