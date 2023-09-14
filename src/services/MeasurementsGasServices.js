export async function getAllMeasurementsGas() {
    try {
        const response = await fetch("http://localhost:5000/measurements-gas");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}