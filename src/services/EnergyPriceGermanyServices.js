export async function getAllEnergyPriceGermany() {
    try {
        const response = await fetch("http://localhost:5000/energy-price-germany");
        return await response.json();
    } catch (err) {
        return console.error(err.message);
    }
}