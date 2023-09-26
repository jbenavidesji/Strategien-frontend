import React, {useState} from 'react';
// @mui
import {Button, Card, CardContent, Slider, Typography} from '@mui/material';

export default function RoomHeatingControlCard({ currentTemperature }) {

    const [temperature, setTemperature] = useState(23) ;
    const handleTemperatureChange = (event, newValue) => {
        setTemperature(newValue);
    };
    const applyTemperature = () => {
        console.log(`Ausgewählte Temperatur: ${temperature}`);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Steuerung der Temperatur
                </Typography>
                <div>
                    <Typography id="temperature-slider" gutterBottom>
                        Temperatur: {temperature}°C
                    </Typography>
                    <Slider
                        value={temperature}
                        onChange={handleTemperatureChange}
                        aria-labelledby="temperature-slider"
                        min={10}
                        max={30}
                        step={1}
                    />
                </div>
                <Button variant="contained" onClick={applyTemperature}>
                    Anwenden
                </Button>
            </CardContent>
        </Card>
    );
}