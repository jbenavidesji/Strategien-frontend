export async function getAllSavingsTotal() {
    try {
        const response = await fetch("http://localhost:5000/savings-total");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}