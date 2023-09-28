import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    Grid,
    FormControlLabel,
    Switch,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    CssBaseline, TextField,
} from '@mui/material';

function SettingsPage() {
    const [benachrichtigungen, setBenachrichtigungen] = useState(true);
    const [zeitzon, setZeitzon] = useState('UTC');

    const handleSpeichern = () => {
        // Agregar lógica para guardar la configuración general aquí
    };

    return (
        <Container maxWidth="md">
            <CssBaseline />
            <Paper elevation={3} style={{ padding: '2rem' }}>
                <Typography variant="h4" gutterBottom>
                    Allgemeine Einstellungen
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Zeitzone</InputLabel>
                            <Select
                                value={zeitzon}
                                onChange={(e) => setZeitzon(e.target.value)}
                                label="Zeitzone"
                            >
                                <MenuItem value="UTC">UTC</MenuItem>
                                <MenuItem value="GMT">GMT</MenuItem>
                                <MenuItem value="CET">CET</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={benachrichtigungen}
                                    onChange={() => setBenachrichtigungen(!benachrichtigungen)}
                                />
                            }
                            label="Benachrichtigungen (E-Mail)"
                        />
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSpeichern}
                    style={{ marginTop: '1rem' }}
                >
                    Speichern
                </Button>
            </Paper>
        </Container>
    );
}

export default SettingsPage;
