export async function getAllSavings() {
    try {
        const response = await fetch("http://localhost:5000/savings");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}