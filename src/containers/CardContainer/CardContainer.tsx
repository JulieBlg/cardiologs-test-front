import React, { FC } from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';

import PatientCard from '../../components/PatientCard';
import styles from './styles';
import { Card } from '../../typings';

interface Props {
    status: string;
    cards: Array<Card>;
}

const CardContainer: FC<Props> = ({ status, cards }) => {
    const classes = makeStyles(styles)();

    return (
        <Grid item xs={4}>
            <Paper elevation={2} className={classes.patientCardContainer}>
                <Typography variant="h5" component="h2" align="center">
                    {status}
                </Typography>
                {cards.map(card => {
                    return <PatientCard key={card.id} card={card} status={status} />
                })}
            </Paper>
        </Grid>
    );
}

export default CardContainer;