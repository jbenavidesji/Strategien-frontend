export async function getAllMeasurementsElectricity() {
    try {
        const response = await fetch("http://localhost:5000/measurements-electricity");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}