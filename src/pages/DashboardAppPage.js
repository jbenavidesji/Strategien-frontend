import { Helmet } from 'react-helmet-async';
import React, {useEffect, useState} from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
} from '../sections/@dashboard/app';
import AppConsumeCurrentSummary from "../sections/@dashboard/app/AppConsumeCurrentSummary";
import {getAllHints} from "../services/HintsServices";
import {getAllConsumeCurrent} from "../services/ConsumeCurrentServices";
import {getAllSavings} from "../services/SavingsServices";
import AppSavingsChart from "../sections/@dashboard/app/AppSavingsChart";
import AppSavingsTotalCard from "../sections/@dashboard/app/AppSavingsTotalCard";
import {getAllSavingsTotal} from "../services/SavingsTotalServices";
import AppConsumeMeasurementsChart from "../sections/@dashboard/app/AppConsumeMeasurementsChart";
import {getAllMeasurementsElectricity} from "../services/MeasurementsElectricityServices";
import {getAllMeasurementsGas} from "../services/MeasurementsGasServices";
import {getAllMeasurementsSolar} from "../services/MeasurementsSolarServices";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

    const [hints, setHints] = useState([])
    const [consumeCurrentValues, setConsumeCurrent] = useState([])

    const [savings, setSavings] = useState([])
    const [savingAmountData, setSavingAmountData] = useState([]);
    const [savingDateData, setSavingDateData] = useState([]);
    const [savingsTotal, setSavingsTotal] = useState([])
    const [savingTotalData, setSavingTotalData] = useState([]);

    const [measurementsElectricity, setMeasurementsElectricity] = useState([])
    const [measurementsElectricityData, setMeasurementsElectricityData] = useState([]);
    const [measurementsElectricityDateData, setMeasurementsElectricityDateData] = useState([]);

    const [measurementsGas, setMeasurementsGas] = useState([])
    const [measurementsGasData, setMeasurementsGasData] = useState([]);
    const [measurementsGasDateData, setMeasurementsGasDateData] = useState([]);

    const [measurementsSolar, setMeasurementsSolar] = useState([])
    const [measurementsSolarData, setMeasurementsSolarData] = useState([]);
    const [measurementsSolarDateData, setMeasurementsSolarDateData] = useState([]);

    const theme = useTheme();


    useEffect(() => {
        getAllConsumeCurrent()
          .then(consumeCurrentValues => {
              setConsumeCurrent(consumeCurrentValues);
          });

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
                const measurementsGasDate = measurementsGas.map(measurement => measurement.date_measurements_gas);
                setMeasurementsGasData(measurementsGasValue);
                setMeasurementsGasDateData(measurementsGasDate);
            });

        getAllMeasurementsSolar()
            .then(measurementsSolar => {
                setMeasurementsSolar(measurementsSolar);
                const measurementsSolarValue = measurementsSolar.map(measurement => measurement.amount_measurements_solar);
                const measurementsSolarDate = measurementsSolar.map(measurement => measurement.date_measurements_solar);
                setMeasurementsSolarData(measurementsSolarValue);
                setMeasurementsSolarDateData(measurementsSolarDate);
            });

        getAllSavings()
            .then(savings => {
                setSavings(savings);
                const savingsAmount = savings.map(saving => saving.amount_saving);
                const savingsDate = savings.map(saving => saving.date_formatted_saving);
                setSavingAmountData(savingsAmount);
                setSavingDateData(savingsDate);
            });

        getAllSavingsTotal()
            .then(savingstotal => {
                setSavingsTotal(savingstotal);
                const savingsTotalSelected = savingstotal.map(savingTotal => ({
                    name: savingTotal.art_energy_savings_total,
                    value: savingTotal.amount_savings_total
                })
            );
                setSavingTotalData(savingsTotalSelected);
            });

        },[]
    )
    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                  Hallo, Willkommen
                </Typography>

                <Grid container spacing={3}>

                    {consumeCurrentValues.map(consumeCurrent => (
                        <Grid key={consumeCurrent.id_cc} item xs={3} sm={6} md={3}>
                            <AppConsumeCurrentSummary title={consumeCurrent.name_room_cc} total={consumeCurrent.current_temperature_cc} color={consumeCurrent.state_color_cc}/>
                        </Grid>
                    ))}

                    <Grid item xs={12} md={6} lg={12}>
                        <AppConsumeMeasurementsChart
                            title="Energieverbrauch Objekt: Bremer Str. 1 - 4. Etage"
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

                    <Grid item xs={12} md={4} lg={8}>
                        <AppSavingsChart
                            title="Erspannise im Jahr 2022"
                            subheader="(+43%) mehr als letztes Jahr"
                            chartLabels={savingDateData}
                            chartData={[
                                {
                                    name: 'Euro',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: savingAmountData,
                                },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={4} lg={4}>
                        <AppSavingsTotalCard
                            title="Erspanisse nach Art der Energie"
                            list={savingTotalData}
                        />
                    </Grid>

                </Grid>
          </Container>
    </>
  );
}
