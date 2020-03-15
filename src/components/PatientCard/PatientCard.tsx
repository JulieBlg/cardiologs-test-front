import React, { FC } from 'react';
import { 
    Avatar, 
    Button,
    Card as MaterialCard, 
    Chip, 
    Grid,
    CardActions, 
    CardContent, 
    CardHeader, 
    makeStyles, 
    Typography 
} from '@material-ui/core';

import styles from './styles';
import { Card } from '../../typings';
import { statuses } from '../../global/statuses.json';

interface Props {
    card: any;
    status: string;
    handleClick: (card: Card, statusButton: string) => void;
}

const PatientCard: FC<Props> = ({ card, status, handleClick }) => {
    const classes = makeStyles(styles)();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MaterialCard className={classes.patientCard}>
                    <CardHeader 
                        title={card.patient_name} 
                        avatar={
                            <Avatar>
                                {card.patient_name[0]}
                            </Avatar>
                        }
                        subheader={`Patient ID : ${card.id}`}
                    />
                    <CardContent>
                        <Typography variant="body1" className={classes.listTitle}>
                            Arrhythmias :
                        </Typography>
                        <Grid item xs={12} className={classes.arrythmiasList}>
                            {card.arrhythmias.map((arrhythmia: string) => {
                                return (
                                    <Chip key={arrhythmia} label={arrhythmia} className={classes.arrythmia}/>
                                );
                            })}
                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Grid container justify="space-between">
                            {statuses.filter(globalStatus => globalStatus !== status).map(statusButton => 
                                <Grid item key={statusButton}>
                                    <Button 
                                        size="small" 
                                        variant="contained" 
                                        className={classes.actionButton}
                                        onClick={() => handleClick(card, statusButton)} 
                                    >
                                        {statusButton}
                                    </Button>
                                </Grid>
                            )}
                        </Grid>
                    </CardActions>
                </MaterialCard>
            </Grid>
        </Grid>
    
    );
}

export default PatientCard;