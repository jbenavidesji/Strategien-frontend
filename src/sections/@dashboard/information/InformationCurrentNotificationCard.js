import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WarningIcon from '@mui/icons-material/Warning';
import PropTypes from "prop-types";
import AppSavingsTotalCard from "../app/AppSavingsTotalCard";

AppSavingsTotalCard.propTypes = {
    notification: PropTypes.string,
};
export default function InformationCurrentNotificationCard ({notifications}){
    return (

        <Card>
            {notifications.map((notification) => (
            <CardContent key={notification.id} style={{ textAlign: 'center' }}>
                <WarningIcon color="error" style={{ fontSize: 48 }} />
                <Typography variant="h6" color="textSecondary">
                    {notification.room}
                </Typography>
                <Typography variant="h5">
                    {notification.description}
                </Typography>
            </CardContent>
            ))}
        </Card>
    );
};
