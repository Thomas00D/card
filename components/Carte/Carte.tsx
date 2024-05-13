'use client';

import { Grid, Container, Button, Text, Card } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './Carte.module.css';
import { CarteType } from '@/types/carteType';
import { generateCarteData } from '@/Data/CardData';

export function Carte() {
  const [paireOne, setpaireOne] = useState<string[]>([]);
  const [paireTwo, setpaireTwo] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [carteData, setCarteData] = useState<CarteType[]>([]);

  useEffect(() => {
    if (paireOne.length === 1 && paireTwo.length === 1) {
      if (paireOne[0] === paireTwo[0]) {
        setScore(score + 1);
      }
      setpaireOne([]);
      setpaireTwo([]);
    }
  }, [paireOne, paireTwo]);

  useEffect(() => {
    setCarteData(generateCarteData().sort(() => Math.random() - 0.5));
  }, []);

  const onClickCard = (img: string) => {
    if (paireOne.length === 0) {
      setpaireOne([...paireOne, img]);
    } else {
      setpaireTwo([...paireTwo, img]);
    }
  };

  return (
    <>
      <div className={classes.score}>
        <Text className={classes.textScore}>Score: {score}</Text>
      </div>
      <Container>
        <Grid>
          {carteData.map((carte: CarteType) => (
            <Grid.Col span={{ base: 12, xs: 2 }}>
              <Card className={classes.jeux} onClick={() => onClickCard(carte.img)}>
                <img src={carte.img} alt="carte" />
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
