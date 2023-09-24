import { Helmet } from 'react-helmet-async';
import React, {useEffect, useState} from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography} from '@mui/material';
// components

// sections
import InformationCurrentConsumeBarChart from "../sections/@dashboard/information/InformationCurrentConsumeBarChart";
// services
import {getAllConsumeEnergyGermany} from "../services/ConsumeEnergyGermanyServices";

// ----------------------------------------------------------------------

export default function EnergyInformationPage() {

    const [consumeGermanyStates, setConsumeGermanyStates] = useState([])
    const [consumeGermanyStatesData, setConsumeGermanyStatesData] = useState([]);

    const theme = useTheme();
    const dayOfYear = new Date().toString();

    useEffect(() => {

            getAllConsumeEnergyGermany()
                .then(consumeGermanyStates => {
                    setConsumeGermanyStates(consumeGermanyStates);
                    const consumeGermanyStatesSelected = consumeGermanyStates.map(consume => ({
                            label: consume.state_ceg,
                            value: consume.consume_kw_ceg
                        })
                    );
                    setConsumeGermanyStatesData(consumeGermanyStatesSelected);
                });

        },[]
    )
    return (
        <>
            <Helmet>
                <title> Information </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Informationen zu energiewirtschaftlichen Themen in Deutschland
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={12}>
                        <InformationCurrentConsumeBarChart
                            title="Stromverbrauch pro Kopf in Kilowattstunden in den Bundesländern"
                            subheader="Die Daten zum Stromverbrauch basieren auf dem aktuellen Stromspiegel für Deutschland.
                            Dafür wurden die Verbrauchsdaten von 360.000 Haushalten ausgewertet.
                            Der Stromspiegel wird vom Bundesministerium für Wirtschaft und Klimaschutz gefördert.
                            Im bundesweiten Vergleich von Stromverbrauch und Preisen gibt es erhebliche Unterschiede von bis zu 27 Prozent.
                            Entsprechend unterschiedlich ist auch das Sparpotenzial. Fest steht: Haushalte sollten Verbrauch und Tarifwechsel prüfen."
                            chartData={consumeGermanyStatesData}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
