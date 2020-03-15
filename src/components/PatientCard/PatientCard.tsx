import React, { FC } from 'react';
import { 
    Avatar, 
    Button,
    Card, 
    Chip, 
    Grid,
    CardActions, 
    CardContent, 
    CardHeader, 
    makeStyles, 
    Typography 
} from '@material-ui/core';

import styles from './styles';
import { statuses } from '../../global/statuses.json'

interface Props {
    card: any;
    status: string;
}

const PatientCard: FC<Props> = ({ card, status }) => {
    const classes = makeStyles(styles)();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card className={classes.patientCard}>
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
                                    <Button size="small" variant="contained" className={classes.actionButton}>
                                        {statusButton}
                                    </Button>
                                </Grid>
                            )}
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    
    );
}

export default PatientCard;