import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import React, {useEffect, useState} from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import {Grid, Container, Typography, Divider} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import AppConsumeCurrentSummary from "../sections/@dashboard/app/AppConsumeCurrentSummary";
import {getAllHints} from "../services/HintsServices";
import {getAllConsumeCurrent} from "../services/ConsumeCurrentServices";
import {getAllSavings} from "../services/SavingsServices";
import AppSavingsChart from "../sections/@dashboard/app/AppSavingsChart";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

    const [hints, setHints] = useState([])
    const [consumeCurrentValues, setConsumeCurrent] = useState([])
    const [savings, setSavings] = useState([])
    const [savingAmountData, setSavingAmountData] = useState([]);
    const [savingDateData, setSavingDateData] = useState([]);

    const theme = useTheme();


    useEffect(() => {
        getAllConsumeCurrent()
          .then(consumeCurrentValues => {
              setConsumeCurrent(consumeCurrentValues);
          });

        getAllSavings()
            .then(savings => {
                setSavings(savings);
                const savingsAmount = savings.map(saving => saving.amount_saving);
                const savingsDate = savings.map(saving => saving.date_formatted_saving);
                setSavingAmountData(savingsAmount);
                setSavingDateData(savingsDate);
            })
        },[]
    )
    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>

            <Container maxWidth="xl">
                <Typography variant="h3" sx={{ mb: 5 }}>
                  Smart Heating
                </Typography>
                <Typography variant="h4" sx={{ mb: 5 }}>
                  Übersicht
                </Typography>

                <Grid container spacing={3}>

                    {consumeCurrentValues.map(consumeCurrent => (
                        <Grid item xs={3} sm={6} md={3}>
                            <AppConsumeCurrentSummary key={consumeCurrent.id_cc} title={consumeCurrent.name_room_cc} total={consumeCurrent.current_temperature_cc} color={consumeCurrent.state_color_cc} icon={'ant-design:bug-filled'} />
                        </Grid>
                    ))}

                    <Grid item xs={12} md={6} lg={12}>
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
                </Grid>


          </Container>
    </>
  );
}
