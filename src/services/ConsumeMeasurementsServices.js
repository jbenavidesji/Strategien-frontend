export async function getAllConsumeMeasurements() {
    try {
        const response = await fetch("http://localhost:5000/consume-measurements");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}