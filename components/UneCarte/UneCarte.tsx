'use client';
import { Grid, Container, Text, Card, Group, Stack } from '@mantine/core';
import classes from './UneCarte.module.css';


export function UneCarte() {
  return (
      <Container>
        <Grid>
            <Grid.Col span={{ base: 12, xs: 2 }} >
              <Card className={classes.jeux} onClick={() => onClickCard()}>
                <img src={} alt="carte" />
   
  );
}
