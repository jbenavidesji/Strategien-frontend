import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

export default function InformationCurrentPriceGermanyCard (){
    const [energyPrice, setEnergyPrice] = useState(null);

    useEffect(() => {
        fetch('https://api.awattar.de/v1/marketdata')
            .then((response) => response.json())
            .then((data) => {
                const dataList = data && data.data ? data.data : [];
                if (dataList && dataList.length > 0) {
                    const price = dataList[0].marketprice;
                    setEnergyPrice(price);
                }
            })
            .catch((error) => {
                console.error('Fehler beim Abrufen der Daten:', error);
            });

    }, []);

    return (
        <Card>
            <CardContent style={{ textAlign: 'center' }}>
                <InfoIcon color="primary" style={{ fontSize: 48 }} />
                <Typography variant="h6" color="textSecondary">
                    Energiepreise in Deutschland
                </Typography>
                {energyPrice !== null && (
                    <Typography variant="h5">
                        Aktuelle stündliche Strompreise: {energyPrice} Eur/MWh
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};
