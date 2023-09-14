export async function getAllMeasurementsSolar() {
    try {
        const response = await fetch("http://localhost:5000/measurements-solar");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}