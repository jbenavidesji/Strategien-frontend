import { Helmet } from 'react-helmet-async';
import React, {useEffect, useState} from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography} from '@mui/material';
// components

// sections
import {
} from '../sections/@dashboard/app';
import {getAllMeasurementsElectricity} from "../services/MeasurementsElectricityServices";
import {getAllMeasurementsGas} from "../services/MeasurementsGasServices";
import {getAllMeasurementsSolar} from "../services/MeasurementsSolarServices";
import AnalysisConsumeMeasurementsChart from "../sections/@dashboard/analysis/AnalysisConsumeMeasurementsChart";
import AnalysisCurrentSubject from "../sections/@dashboard/analysis/AnalysisCurrentSubject";
import {getAllMeasurementsTypeTotal} from "../services/MeasurementsTypeTotalServices";
import AnalysisCurrentSummary from "../sections/@dashboard/analysis/AnalysisCurrentSummary";
import {getAllConsumeMeasurementsYearTotal} from "../services/ConsumeMeasurementsYearTotalServices";

// ----------------------------------------------------------------------

export default function AnalysisEnergyPage() {

    const [measurementsElectricity, setMeasurementsElectricity] = useState([])
    const [measurementsElectricityData, setMeasurementsElectricityData] = useState([]);
    const [measurementsElectricityDateData, setMeasurementsElectricityDateData] = useState([]);

    const [measurementsGas, setMeasurementsGas] = useState([])
    const [measurementsGasData, setMeasurementsGasData] = useState([]);

    const [measurementsSolar, setMeasurementsSolar] = useState([])
    const [measurementsSolarData, setMeasurementsSolarData] = useState([]);

    const [measurementsTotal, setMeasurementsTotal] = useState([])
    const [measurementsTotalData, setMeasurementsTotalData] = useState([]);
    const [measurementsTotalCO2Data, setMeasurementsTotalCO2Data] = useState([]);

    const [measurementsYearTotal, setMeasurementsYearTotal] = useState([])
    const [measurementsYearTotalData, setMeasurementsYearTotalData] = useState([]);
    const [measurementsYearTotalDateData, setMeasurementsYearTotalDateData] = useState([]);

    const theme = useTheme();
    const dayOfYear = new Date().toString();

    useEffect(() => {

            getAllMeasurementsElectricity()
                .then(measurementsElectricity => {
                    setMeasurementsElectricity(measurementsElectricity);
                    const measurementsElectricityValue = measurementsElectricity.map(measurement => measurement.amount_measurements_electricity);
                    const measurementsElectricityDate = measurementsElectricity.map(measurement => measurement.date_measurements_electricity);
                    setMeasurementsElectricityData(measurementsElectricityValue);
                    setMeasurementsElectricityDateData(measurementsElectricityDate);
                });

            getAllMeasurementsGas()
                .then(measurementsGas => {
                    setMeasurementsGas(measurementsGas);
                    const measurementsGasValue = measurementsGas.map(measurement => measurement.amount_measurements_gas);
                    setMeasurementsGasData(measurementsGasValue);
                });

            getAllMeasurementsSolar()
                .then(measurementsSolar => {
                    setMeasurementsSolar(measurementsSolar);
                    const measurementsSolarValue = measurementsSolar.map(measurement => measurement.amount_measurements_solar);
                    setMeasurementsSolarData(measurementsSolarValue);
                });

            getAllMeasurementsTypeTotal()
                .then(measurementsTotal => {
                    setMeasurementsTotal(measurementsTotal);
                    const measurementsTotalSelected = measurementsTotal.map(total => ({
                            label: total.name_measurements_type_total,
                            value: total.amount_consume_measurements_type_total
                        })
                    );
                    const measurementsTotalCO2Selected = measurementsTotal.map(total => ({
                            label: total.name_measurements_type_total,
                            value: total.co2_measurements_type_total
                        })
                    );
                    setMeasurementsTotalData(measurementsTotalSelected);
                    setMeasurementsTotalCO2Data(measurementsTotalCO2Selected);
                });

            getAllConsumeMeasurementsYearTotal()
                .then(measurementsYearTotal => {
                    setMeasurementsYearTotal(measurementsYearTotal);
                    const measurementsYearTotalValue = measurementsYearTotal.map(measurement => measurement.total_consume_cmyear);
                    const measurementsYearTotalDate = measurementsYearTotal.map(measurement => measurement.date_cmyear);
                    setMeasurementsYearTotalData(measurementsYearTotalValue);
                    setMeasurementsYearTotalDateData(measurementsYearTotalDate);
                });

        },[]
    )
    return (
        <>
            <Helmet>
                <title> Analyse </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Analyse des Energieverbrauchs
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={12}>
                        <AnalysisConsumeMeasurementsChart
                            title="Energieverbrauch Objekt: Bremer Str. 1 - 4. Etage im Jahr 2022"
                            subheader="(+53%) weniger als letztes Jahr"
                            chartLabels={measurementsElectricityDateData}
                            chartData={[
                                {
                                    name: 'Strom',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsElectricityData,

                                },
                                {
                                    name: 'Gas',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsGasData,

                                },
                                {
                                    name: 'Solar',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsSolarData,

                                },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <AnalysisCurrentSubject
                            title="Aktueller Verbrauch im Vergleich zum Vorjahr"
                            subheader={dayOfYear}
                            chartData={measurementsTotalData}
                       />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <AnalysisCurrentSummary
                            title="Aktueller Vergleich des Verbrauchs nach Energieart"
                            subheader={dayOfYear}
                            chartData={measurementsTotalData}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <AnalysisCurrentSubject
                            title="Aktuelle CO2 Bilanz im Vergleich zum Vorjahr"
                            subheader={dayOfYear}
                            chartData={measurementsTotalCO2Data}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={12}>
                        <AnalysisConsumeMeasurementsChart
                            title="Energieverbrauch in den vergangenen Jahren"
                            subheader="(-22%) weniger im Durchschnitt"
                            chartLabels={measurementsYearTotalDateData}
                            chartData={[
                                {
                                    name: '',
                                    type: 'area',
                                    fill: 'fill',
                                    data: measurementsYearTotalData,

                                },
                            ]}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
