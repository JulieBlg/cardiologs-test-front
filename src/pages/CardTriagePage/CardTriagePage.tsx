import React, { FC, useEffect, useState, ChangeEvent } from 'react';
import { Container, Grid, InputAdornment, TextField, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import CardContainer from '../../containers/CardContainer';
import styles from './styles';
import { Card } from '../../typings';
import { getCards, updateCardStatus, searchCards } from '../../services/cardsServices';
import { statuses } from '../../global/statuses.json'

const CardTriagePage: FC = () => {
  const classes = makeStyles(styles)();
  const [cards, setCards] = useState([]);
  
  const getCardsByStatus = (status: string, cards: Card[]) => cards.filter(card => card.status === status);

  const handleClick = async (card: Card, status: string) => {
    await updateCardStatus({ card, status });

    await fetchData();
  }

  const fetchData = async () => {
    const data = await getCards();

    setCards(data);
  }

  const filterCards = async (event:ChangeEvent<HTMLInputElement>) => {
    const data = await searchCards(event.target.value);

    setCards(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3} justify="flex-end" className={classes.filtersBar}>
        <Grid item xs={3}>
          <TextField 
            id="filter" 
            label="Filter" 
            variant="outlined" 
            fullWidth
            onChange={filterCards}
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
          return <CardContainer key={status} status={status} cards={statusCards} handleClick={handleClick} />
        })}
      </Grid>
    </Container>
  ); 
}

export default CardTriagePage;
