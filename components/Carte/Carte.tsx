'use client';
import { Grid, Container, Text, Card, Group, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './Carte.module.css';
import { CarteType } from '@/types/carteType';
import { generateCarteData } from '@/Data/CardData';

export function Carte() {
  const [score, setScore] = useState<number>(0);
  const [tentative, setTentative] = useState<number>(0);

  const [cardOne, setcardOne] = useState<string[]>([]);
  const [cardTwo, setcardTwo] = useState<string[]>([]);

  const [carteData, setCarteData] = useState<CarteType[]>([]);
 

  useEffect(() => {
    if (cardOne.length == 1 && cardTwo.length == 1) {
      if (cardOne[0] == cardTwo[0]) {
        setScore(score + 1);
      } else {
        setTentative(tentative + 1);
      }
      setcardOne([]);
      setcardTwo([]);
    } 

  }, [cardOne, cardTwo]);

  useEffect(() => {
    setCarteData(generateCarteData().sort(() => Math.random() - 0.5));
  }, []);

  const onClickCard = (img: string) => {
    if (cardOne.length === 0) {
      setcardOne([...cardOne, img]);
    } else if (cardTwo.length === 0) {
      setcardTwo([...cardTwo, img]);
    }
  };
  return (
    <>
      <Stack className={classes.score}>
        <Text className={classes.textScore}>Score: {score}</Text>
        <Text className={classes.textScore}>Tentative: {tentative}</Text>
      </Stack>
      <Container>
        <Grid>
          {carteData.map((carte, index) => (
            <Grid.Col span={{ base: 12, xs: 2 }} key={index}>
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
