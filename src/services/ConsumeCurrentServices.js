export async function getAllConsumeCurrent() {
    try {
        const response = await fetch("http://localhost:5000/consume-current");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}