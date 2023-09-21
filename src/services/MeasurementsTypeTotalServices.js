export async function getAllMeasurementsTypeTotal() {
    try {
        const response = await fetch("http://localhost:5000/measurements-type-total");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}