import React, { FC } from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';

import PatientCard from '../../components/PatientCard';
import styles from './styles';
import { Card } from '../../typings';

interface Props {
    status: string;
    cards: Card[];
    handleClick: (card: Card, statusButton: string) => void;
    color: string;
}

const CardContainer: FC<Props> = ({ status, cards, handleClick, color }) => {
    const classes = makeStyles(styles)({ color });

    return (
        <Grid item xs={12} lg={4}>
            <Paper elevation={0} className={classes.patientCardContainer} data-testid="cardContainer">
                <Typography variant="h5" component="h2" align="center" className={classes.cardHeader}>
                    {status}
                </Typography>
                {cards.length ? 
                    cards.map(card => {
                        return <PatientCard key={card.id} card={card} status={status} handleClick={handleClick}/>
                    }) : 
                    <Typography variant="body2" align="center" className={classes.noPatient}>
                        No patient
                    </Typography>
                }
            </Paper>
        </Grid>
    );
}

export default CardContainer;