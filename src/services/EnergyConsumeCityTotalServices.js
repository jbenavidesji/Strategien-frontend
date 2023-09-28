export async function getAllEnergyConsumeCityTotal() {
    try {
        const response = await fetch("http://localhost:5000/energy-consume-city-total");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}