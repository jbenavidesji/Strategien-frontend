import React, { useState } from 'react';
// @mui
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

export default function RoomHeatingProgramsCard({ programs }) {
    const [activeProgram, setActiveProgram] = useState(null);

    const handleActivateProgram = (programIndex) => {
        setActiveProgram(programIndex);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Heizungsprogramme
                </Typography>
                <Grid container spacing={2}>
                    {programs.map((program, index) => (
                        <Grid item xs={6} key={index}>
                            <div>
                                <Typography gutterBottom>
                                    Titel: {program.title}
                                </Typography>
                                <Typography gutterBottom>
                                    Uhrzeit: von {program.time} bis {program.timeEnd}
                                </Typography>
                                <Typography gutterBottom>
                                    Ideale Temperatur: {program.temperature}°C
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={() => handleActivateProgram(index)}
                                    disabled={activeProgram === index}
                                    fullWidth
                                >
                                    {activeProgram === index ? 'Aktiviert' : 'Aktivieren'}
                                </Button>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}
