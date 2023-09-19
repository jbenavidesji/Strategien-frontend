import { Helmet } from 'react-helmet-async';
import React, {useEffect, useState} from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography, Box} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {getAllHints} from "../services/HintsServices";
import TippEntryCard from "../sections/@dashboard/tipps/TippEntryCard";
import AppConsumeCurrentSummary from "../sections/@dashboard/app/AppConsumeCurrentSummary";


// ----------------------------------------------------------------------

export default function TippsPage() {

    const [hints, setHints] = useState([])

    useEffect(() => {
        getAllHints()
            .then(hints => {
                setHints(hints);
            });
        },[]
    )

    return (
        <>
            <Helmet>
                <title> Tipps </title>
            </Helmet>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Energiesparen im Haushalt: Die besten Tipps für den Alltag
                </Typography>

                <Box
                    component="img"
                    src="/assets/illustrations/saving_energy.png"
                    sx={{ height: 260, mx: 'auto' }}
                />

                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    Energiesparen im Haushalt geht erstaunlich leicht. Dabei lassen sich mit kleineren Verhaltensänderungen im Jahr 250 Euro und mehr sparen. Hier unsere zwölf besten Tipps zum Strom sparen mit Kühlschrank, Waschmaschine, Backofen und Co.
                </Typography>
                <Typography variant="caption">Quelle: Bundesministerium für Wirtschaft und Klimaschutz</Typography>



                <Grid container spacing={3}>
                    {hints.map(hint=> (
                        <Grid key={hint.id_hint} item xs={6} sm={12} md={12}>
                            <TippEntryCard title={hint.title_hint} description={hint.description_hint} savingAmount={hint.saving_amount_hint} savingCO2={hint.saving_co2_hint} assumption={hint.assumption_hint}/>
                        </Grid>
                    ))}
                </Grid>

            </Container>


        </>
    );
}
