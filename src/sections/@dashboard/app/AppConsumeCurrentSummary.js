// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import {Card, Link, Typography} from '@mui/material';
import {Link as RouterLink} from "react-router-dom";
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components


// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppConsumeCurrentSummary.propTypes = {
    id: PropTypes.number,
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    sx: PropTypes.object,
};

export default function AppConsumeCurrentSummary({ id, title, total, color = 'primary', sx, ...other }) {
    const linkTo = `/dashboard/rooms/${id}/${title}`;
    return (
        <Link to={linkTo} component={RouterLink} underline="none">
            <Card
                sx={{
                    py: 5,
                    boxShadow: 0,
                    textAlign: 'center',
                    color: (theme) => theme.palette[color].darker,
                    bgcolor: (theme) => theme.palette[color].lighter,
                    ...sx,
                }}
                {...other}
            >
                <Typography variant="h5">{fShortenNumber(total)}&deg;</Typography>
                <Typography variant="h5">
                    {title}
                </Typography>
            </Card>
        </Link>
    );
}