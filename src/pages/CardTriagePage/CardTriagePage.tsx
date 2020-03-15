import React, { FC } from 'react';
import { Container, Grid, InputAdornment, TextField, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import CardContainer from '../../containers/CardContainer';
import styles from './styles';
import { Card } from '../../typings';
import { statuses } from '../../global/statuses.json'

const cards: Array<Card> = [
  {
      "arrhythmias": [
        "AFib",
        "AV Block",
        "Pause",
        "PSVC",
        "PVC"
      ],
      "created_date": "2020-03-10T13:14:59+0000",
      "id": 0,
      "patient_name": "Bob",
      "status": "PENDING"
    },
    {
      "arrhythmias": [
        "Pause"
      ],
      "created_date": "2020-01-01T00:12:21+0000",
      "id": 1,
      "patient_name": "Bill",
      "status": "COMPLETED"
    },
    {
      "arrhythmias": [
        "AFib",
        "Pause"
      ],
      "created_date": "2019-12-31T00:11:14+0000",
      "id": 2,
      "patient_name": "Elsa",
      "status": "DONE"
    },
];

const getCardsByStatus = (status: string, cards: Array<Card>) => cards.filter(card => card.status === status);

const CardTriagePage: FC = () => {
  const classes = makeStyles(styles)();

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3} justify="flex-end" className={classes.filtersBar}>
        <Grid item xs={3}>
          <TextField 
            id="filter" 
            label="Filter" 
            variant="outlined" 
            fullWidth 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {statuses.map((status: string) => {
          const statusCards = getCardsByStatus(status, cards);

          return <CardContainer key={status} status={status} cards={statusCards} />
        })}
      </Grid>
    </Container>
  ); 
}

export default CardTriagePage;
