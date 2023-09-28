export async function getAllEnergyConsumeCityCO2() {
    try {
        const response = await fetch("http://localhost:5000/energy-consume-city-co2");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}