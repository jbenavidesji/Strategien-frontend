// @mui
import PropTypes from 'prop-types';
import { Box, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

AppSavingsTotalCard.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    list: PropTypes.array.isRequired,
};

export default function AppSavingsTotalCard({ title, subheader, list, ...other }) {
    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <CardContent>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                >
                    {list.map((savingTotal) => (
                        <Paper key={savingTotal.name} variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
                            <Box sx={{ mb: 0.5 }}>{savingTotal.icon}</Box>

                            <Typography variant="h3">{fShortenNumber(savingTotal.value)} €-</Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {savingTotal.name}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
}
