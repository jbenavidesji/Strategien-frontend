import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
} from '@mui/material';
import { Edit, Save } from '@mui/icons-material';
import account from "../_mock/account";

function ProfilePage() {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(account.name);
    const [email, setEmail] = useState(account.email);
    const [standort, setStandort] = useState(account.city);
    const [direction, setDirection] = useState(account.direction);

    const handleSpeichern = () => {
        setEditMode(false);
        // Realiza una acción para guardar los cambios (p. ej., envía a una API)
    };

    return (
        <Card variant="outlined">
            <CardHeader
                avatar={<Avatar alt="Avatar" src="" />}
                title={editMode ? (
                    <TextField
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        size="small"
                        label="Name"
                    />
                ) : name}
                subheader={account.direction}
                action={
                    <Button
                        onClick={() => setEditMode(!editMode)}
                        variant="outlined"
                        startIcon={editMode ? <Save /> : <Edit />}
                    >
                        {editMode ? 'Speichern' : 'Bearbeiten'}
                    </Button>
                }
            />
            <CardContent>
                {editMode ? (
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            value={account.email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            label="E-Mail"
                            size="small"
                        />
                    </Box>
                ) : (
                    <Typography variant="body1" gutterBottom>
                        E-Mail: {email || 'Nicht angegeben'}
                    </Typography>
                )}
                {editMode ? (
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            value={account.city}
                            onChange={(e) => setStandort(e.target.value)}
                            variant="outlined"
                            label="Standort"
                            size="small"
                        />
                    </Box>
                ) : (
                    <Typography variant="body1" gutterBottom>
                        Standort: {standort || 'Nicht angegeben'}
                    </Typography>
                )}
                {editMode ? (
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            value={account.direction}
                            onChange={(e) => setDirection(e.target.value)}
                            variant="outlined"
                            label="Name"
                            size="small"
                        />
                    </Box>
                ) : (
                    <Typography variant="body1" gutterBottom>
                        Adresse: {account.direction ? `${account.direction}` : 'Nicht angegeben'}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default ProfilePage;