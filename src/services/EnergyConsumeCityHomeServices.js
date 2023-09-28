export async function getAllEnergyConsumeCityHome() {
    try {
        const response = await fetch("http://localhost:5000/energy-consume-city-home");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}