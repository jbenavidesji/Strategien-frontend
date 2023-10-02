import { Helmet } from 'react-helmet-async';
import React, {useEffect, useState} from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography} from '@mui/material';
// sections
import AppConsumeCurrentSummary from "../sections/@dashboard/app/AppConsumeCurrentSummary";
import AppSavingsChart from "../sections/@dashboard/app/AppSavingsChart";
import AppSavingsTotalCard from "../sections/@dashboard/app/AppSavingsTotalCard";
import AppConsumeMeasurementsChart from "../sections/@dashboard/app/AppConsumeMeasurementsChart";
import TipsCarousel from "../sections/@dashboard/tipps/TipsCarousel";
// services
import {getAllConsumeCurrent} from "../services/ConsumeCurrentServices";
import {getAllSavings} from "../services/SavingsServices";
import {getAllSavingsTotal} from "../services/SavingsTotalServices";
import {getAllCmBathroom} from "../services/CmBathroomServices";
import {getAllCmBedroom} from "../services/CmBedroomServices";
import {getAllCmBedroom2} from "../services/CmBedroom2Services";
import {getAllCmHallway} from "../services/CmHallway";
import {getAllCmKitchen} from "../services/CmKitchenServices";
import {getAllCmLivingroom} from "../services/CmLivingrommServices";
import {getAllCmLivingroom2} from "../services/CmLivingromm2Services";
import {getAllCmWintergarten} from "../services/CmWintergardenServices";
import {getAllHints} from "../services/HintsServices";

export default function DashboardAppPage() {

    const [consumeCurrentValues, setConsumeCurrent] = useState([])

    const [savings, setSavings] = useState([])
    const [savingAmountData, setSavingAmountData] = useState([]);
    const [savingDateData, setSavingDateData] = useState([]);
    const [savingsTotal, setSavingsTotal] = useState([])
    const [savingTotalData, setSavingTotalData] = useState([]);

    const [measurementsBathroom, setMeasurementsBathroom] = useState([])
    const [measurementsBathroomData, setMeasurementsBathroomData] = useState([]);
    const [measurementsBathroomTimeData, setMeasurementsBathroomTimeData] = useState([]);

    const [measurementsBedroom, setMeasurementsBedroom] = useState([])
    const [measurementsBedroomData, setMeasurementsBedroomData] = useState([]);

    const [measurementsBedroom2, setMeasurementsBedroom2] = useState([])
    const [measurementsBedroom2Data, setMeasurementsBedroom2Data] = useState([]);

    const [measurementsHallway, setMeasurementsHallway] = useState([])
    const [measurementsHallwayData, setMeasurementsHallwayData] = useState([]);

    const [measurementsKitchen, setMeasurementsKitchen] = useState([])
    const [measurementsKitchenData, setMeasurementsKitchenData] = useState([]);

    const [measurementsLivingroom, setMeasurementsLivingroom] = useState([])
    const [measurementsLivingroomData, setMeasurementsLivingroomData] = useState([]);

    const [measurementsLivingroom2, setMeasurementsLivingroom2] = useState([])
    const [measurementsLivingroom2Data, setMeasurementsLivingroom2Data] = useState([]);

    const [measurementsWintergarden, setMeasurementsWintergarden] = useState([])
    const [measurementsWintergardenData, setMeasurementsWintergardenData] = useState([]);

    const [hints, setHints] = useState([])
    const [hintsData, setHintsData] = useState([]);

    const dayOfYear = new Date().toString();

    useEffect(() => {
        getAllConsumeCurrent()
          .then(consumeCurrentValues => {
              setConsumeCurrent(consumeCurrentValues);
          });

        getAllCmBathroom()
            .then(measurementsBathroom => {
                setMeasurementsBathroom(measurementsBathroom);
                const measurementsBathroomValue = measurementsBathroom.map(measurement => measurement.measurement_cm_bathroom);
                const measurementsBathroomTime = measurementsBathroom.map(measurement => measurement.time_cm_bathroom);
                setMeasurementsBathroomData(measurementsBathroomValue);
                setMeasurementsBathroomTimeData(measurementsBathroomTime);
            });

        getAllCmBedroom()
            .then(measurementsBedroom => {
                setMeasurementsBedroom(measurementsBedroom);
                const measurementsBedroomValue = measurementsBedroom.map(measurement => measurement.measurement_cm_bedroom);
                setMeasurementsBedroomData(measurementsBedroomValue);
            });

        getAllCmBedroom2()
            .then(measurementsBedroom2 => {
                setMeasurementsBedroom2(measurementsBedroom2);
                const measurementsBedroom2Value = measurementsBedroom2.map(measurement => measurement.measurement_cm_bedroom_2);
                setMeasurementsBedroom2Data(measurementsBedroom2Value);
            });

        getAllCmHallway()
            .then(measurementsHallway => {
                setMeasurementsHallway(measurementsHallway);
                const measurementsHallwayValue = measurementsHallway.map(measurement => measurement.measurement_cm_hallway);
                setMeasurementsHallwayData(measurementsHallwayValue);
            });

        getAllCmKitchen()
            .then(measurementsKitchen => {
                setMeasurementsKitchen(measurementsKitchen);
                const measurementsKitchenValue = measurementsKitchen.map(measurement => measurement.measurement_cm_kitchen);
                setMeasurementsKitchenData(measurementsKitchenValue);
            });

        getAllCmLivingroom()
            .then(measurementsLivingroom => {
                setMeasurementsLivingroom(measurementsLivingroom);
                const measurementsLivingroomValue = measurementsLivingroom.map(measurement => measurement.measurement_cm_livingroom);
                setMeasurementsLivingroomData(measurementsLivingroomValue);
            });

        getAllCmLivingroom2()
            .then(measurementsLivingroom2 => {
                setMeasurementsLivingroom2(measurementsLivingroom2);
                const measurementsLivingroom2Value = measurementsLivingroom2.map(measurement => measurement.measurement_cm_livingroom_2);
                setMeasurementsLivingroom2Data(measurementsLivingroom2Value);
            });

        getAllCmWintergarten()
            .then(measurementsWintergarden => {
                setMeasurementsWintergarden(measurementsWintergarden);
                const measurementsWintergardenValue = measurementsWintergarden.map(measurement => measurement.measurement_cm_wintergarden);
                setMeasurementsWintergardenData(measurementsWintergardenValue);
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

        getAllHints()
            .then(hints => {
                setHints(hints);
                const hintsSelected = hints.map(hint => ({
                    id: hint.id_hint,
                    title: hint.title_hint,
                    description: hint.description_hint
                    })
                );
                setHintsData(hintsSelected);
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
                        <Grid key={consumeCurrent.id_cc} item xs={6} sm={6} md={3}>
                            <AppConsumeCurrentSummary id={consumeCurrent.id_cc} title={consumeCurrent.name_room_cc} total={consumeCurrent.current_temperature_cc} color={consumeCurrent.state_color_cc}/>
                        </Grid>
                    ))}

                    <Grid item xs={12} md={12} lg={12}>
                        <AppConsumeMeasurementsChart
                            title={dayOfYear}
                            subheader="(+53%) weniger als gestern"
                            chartLabels={measurementsBathroomTimeData}
                            chartData={[
                                {
                                    name: 'Badzimmer',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsBathroomData,

                                },
                                {
                                    name: 'Schlafzimmer',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsBedroomData,

                                },
                                {
                                    name: 'Schlafzimmer 2',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsBedroom2Data,

                                },
                                {
                                    name: 'Flur',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsHallwayData,

                                },
                                {
                                    name: 'Küche',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsKitchenData,

                                },
                                {
                                    name: 'Wohnzimmer',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsLivingroomData,

                                },
                                {
                                    name: 'Wohnzimmer 2',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsLivingroom2Data,

                                },
                                {
                                    name: 'Wintergarten',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsWintergardenData,
                                },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={12} lg={8}>
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

                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            Tipps für einen nachhaltigen und effizienten Stromverbrauch
                        </Typography>

                        <TipsCarousel hints={hintsData}/>
                    </Grid>
                </Grid>
          </Container>
    </>
  );
}
