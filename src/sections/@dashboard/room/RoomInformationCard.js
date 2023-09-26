import PropTypes from "prop-types";
import React from 'react';
// @mui
import { Card, CardContent, Typography} from '@mui/material';

export default function RoomInformationCard({ temperature, humidity, otherInformation }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Information über den Raum
                </Typography>

                    <Typography >
                        Aktuelle Temperatur: {temperature}°C
                    </Typography>
                    <Typography gutterBottom>
                        Feuchtigkeit: {humidity}%
                    </Typography>
                    <Typography>
                        Sonstiges: {otherInformation}
                    </Typography>
            </CardContent>
        </Card>
    );
}
