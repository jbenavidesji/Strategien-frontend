export async function getAllConsumeMeasurementsYearTotal() {
    try {
        const response = await fetch("http://localhost:5000/consume-measurements-year-total");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}