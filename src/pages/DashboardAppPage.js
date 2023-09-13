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
import AppSavingsTotalCard from "../sections/@dashboard/app/AppSavingsTotalCard";
import {getAllSavingsTotal} from "../services/SavingsTotalServices";

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

    const [hints, setHints] = useState([])
    const [consumeCurrentValues, setConsumeCurrent] = useState([])
    const [savings, setSavings] = useState([])
    const [savingAmountData, setSavingAmountData] = useState([]);
    const [savingDateData, setSavingDateData] = useState([]);
    const [savingsTotal, setSavingsTotal] = useState([])
    const [savingTotalData, setSavingTotalData] = useState([]);

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
                <Typography variant="h3" sx={{ mb: 5 }}>
                  Smart Heating
                </Typography>
                <Typography variant="h4" sx={{ mb: 5 }}>
                  Übersicht
                </Typography>

                <Grid container spacing={3}>

                    {consumeCurrentValues.map(consumeCurrent => (
                        <Grid key={consumeCurrent.id_cc} item xs={3} sm={6} md={3}>
                            <AppConsumeCurrentSummary title={consumeCurrent.name_room_cc} total={consumeCurrent.current_temperature_cc} color={consumeCurrent.state_color_cc} icon={'ant-design:bug-filled'} />
                        </Grid>
                    ))}

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
