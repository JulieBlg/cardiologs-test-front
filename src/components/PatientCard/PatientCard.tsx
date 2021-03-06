import React, { FC } from 'react';
import { 
    Avatar, 
    Card as MaterialCard, 
    Chip, 
    Grid, 
    CardContent, 
    CardHeader, 
    makeStyles, 
    MenuItem,
} from '@material-ui/core';

import StatusMenu from '../../containers/StatusMenu';
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
        <Grid container spacing={3} data-testid="patientCard">
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
                        action={
                            <StatusMenu 
                                options={
                                    statuses
                                        .filter(globalStatus => globalStatus.name !== status)
                                        .map(({name: statusButton}) => 
                                            <MenuItem 
                                                key={statusButton} 
                                                onClick={() => handleClick(card, statusButton)} 
                                                data-testid='menuOption'
                                            >
                                                {statusButton}
                                            </MenuItem>
                                        )
                                }
                            />
                        }
                    />
                    <CardContent>
                        <Grid item xs={12} className={classes.arrythmiasList}>
                            {card.arrhythmias.map((arrhythmia: string) => {
                                return (
                                    <Chip 
                                        key={arrhythmia} 
                                        label={arrhythmia} 
                                        className={classes.arrythmia}
                                        variant="outlined"
                                        size="small"
                                    />
                                );
                            })}
                        </Grid>
                    </CardContent>
                </MaterialCard>
            </Grid>
        </Grid>
    
    );
}

export default PatientCard;