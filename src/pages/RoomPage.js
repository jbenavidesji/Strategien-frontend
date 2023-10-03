import { Helmet } from 'react-helmet-async';
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
// @mui
import {Grid, Container, Typography, Link} from '@mui/material';
// components
// sections
import AppConsumeMeasurementsChart from "../sections/@dashboard/app/AppConsumeMeasurementsChart";
import RoomOrderTimeline from "../sections/@dashboard/room/RoomOrderTimeline";
import RoomHeatingControlCard from "../sections/@dashboard/room/RoomHeatingControlCard";
import RoomInformationCard from "../sections/@dashboard/room/RoomInformationCard";
import RoomHeatingProgramsCard from "../sections/@dashboard/room/RoomHeatingProgramsCard";
// services
import {getAllRoomMeasurements} from "../services/RoomMeasurementsServices";
import {getAllRoomInformation} from "../services/RoomInformationServices";
import {getAllRoomHeatingPrograms} from "../services/RoomHeatingProgramsServices";
import {getAllRoomActions} from "../services/RoomActionsServices";
// ----------------------------------------------------------------------

export default function RoomPage() {


    const [measurementsRoom, setMeasurementsRoom] = useState([])
    const [measurementsRoomData, setMeasurementsRoomData] = useState([]);
    const [measurementsRoomTimeData, setMeasurementsRoomTimeData] = useState([]);

    const [informationRoom, setInformationRoom] = useState([])
    const [temperatureRoom, setTemperatureRoom] = useState([])
    const [humidityRoom, setHumidityRoom] = useState([])
    const [otherInformationRoom, setOtherInformationRoom] = useState([])

    const [heatingPrograms, setHeatingPrograms] = useState([])
    const [heatingProgramsData, setHeatingProgramsData] = useState([]);

    const [roomActions, setRoomActions] = useState([])
    const [roomActionsData, setRoomActionsData] = useState([]);

    const dayOfYear = new Date().toString();
    const params = useParams();
    const nameRoom = params.room;

    useEffect(() => {
        getAllRoomMeasurements()
            .then(measurementsRoom => {
                setMeasurementsRoom(measurementsRoom);
                const measurementsRoomValue = measurementsRoom.map(measurement => measurement.measurement_room_measurement);
                const measurementsRoomTime = measurementsRoom.map(measurement => measurement.time_room_measurement);
                setMeasurementsRoomData(measurementsRoomValue);
                setMeasurementsRoomTimeData(measurementsRoomTime);
            });

        getAllRoomInformation()
            .then(informationRoom => {
                setInformationRoom(informationRoom);
                const temperatureValue = informationRoom.map(information => information.temperature_room_information);
                const humidityValue = informationRoom.map(information => information.humidity_room_information);
                const otherInformationValue = informationRoom.map(information => information.other_room_information);
                setTemperatureRoom(temperatureValue);
                setHumidityRoom(humidityValue);
                setOtherInformationRoom(otherInformationValue);
            });

        getAllRoomHeatingPrograms()
            .then(heatingPrograms => {
                setHeatingPrograms(heatingPrograms);
                const heatingProgramsSelected = heatingPrograms.map(program => ({
                    title: program.title_room_program,
                    time: program.time_room_program,
                    temperature: program.temperature_room_program,
                    timeEnd: program.time_end_room_program,
                    })
                );
                setHeatingProgramsData(heatingProgramsSelected);
            });

        getAllRoomActions()
            .then(roomActions => {
                setRoomActions(roomActions);
                const roomActionsSelected = roomActions.map(action => ({
                        id: action.id_room_actions,
                        title: action.name_room_actions,
                        time: action.date_room_actions,
                    })
                );
                setRoomActionsData(roomActionsSelected);
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
                    {nameRoom}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={8}>
                        <RoomHeatingControlCard currentTemperature={temperatureRoom} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <RoomInformationCard temperature={temperatureRoom} humidity={humidityRoom} otherInformation={otherInformationRoom}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>
                        <AppConsumeMeasurementsChart
                            title={dayOfYear}
                            subheader="(+53%) weniger als gestern"
                            chartLabels={measurementsRoomTimeData}
                            chartData={[
                                {
                                    name: nameRoom,
                                    type: 'area',
                                    fill: 'gradient',
                                    data: measurementsRoomData,

                                },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <RoomOrderTimeline
                            title="Verlauf"
                            subheader="Aktionen in dem Raum in letzter Zeit"
                            list= {roomActionsData}
                        />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <RoomHeatingProgramsCard programs={heatingProgramsData} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
