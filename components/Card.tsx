'use client';

import { Grid, Container, Button, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from '../components/card.module.css';

export function Card() {
  const [paireOne, setpaireOne] = useState<number[]>([]);
  const [paireTwo, setpaireTwo] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (paireOne.length === 1 && paireTwo.length === 1) {
      if (paireOne[0] === paireTwo[0]) {
        setScore(score + 1);
      }
      setpaireOne([]);
      setpaireTwo([]);
    }
  }, [paireOne, paireTwo]);

  const onClickCard = (value: number) => {
    if (paireOne.length === 0) {
      setpaireOne([...paireOne, value]);
    } else {
      setpaireTwo([...paireTwo, value]);
    }
  };

  return (
    <Container my="md">
      <Text className="card">Score: {score}</Text>
      <Grid>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button className="card" onClick={() => onClickCard(1)}>
            1
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(1)}>1</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(2)}>2</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(2)}>2</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(3)}>3</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(3)}>3</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(4)}>4</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(4)}>4</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(5)}>5</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(5)}>5</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(6)}>6</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(6)}>6</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(7)}>7</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(7)}>7</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(8)}>8</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(8)}>8</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(9)}>9</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(9)}>9</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(10)}>10</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(10)}>10</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(11)}>11</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(11)}>11</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(12)}>12</Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 2 }}>
          <Button onClick={() => onClickCard(12)}>12</Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
