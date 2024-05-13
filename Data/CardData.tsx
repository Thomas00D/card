import { nanoid } from 'nanoid';
import { CarteType } from '@/types/carteType';

const createCarteData = (img: string) => ({
  id: nanoid(),
  img,
});

export const generateCarteData = (): CarteType[] => [
  createCarteData('./img/Mercy.png'),
  createCarteData('./img/Mercy.png'),
  createCarteData('./img/Moira.png'),
  createCarteData('./img/Moira.png'),
  createCarteData('./img/Bastion.png'),
  createCarteData('./img/Bastion.png'),
  createCarteData('./img/Solda76.png'),
  createCarteData('./img/Solda76.png'),
  createCarteData('./img/Pharah.png'),
  createCarteData('./img/Pharah.png'),
  createCarteData('./img/Orisa.png'),
  createCarteData('./img/Orisa.png'),
  createCarteData('./img/Reinhardt.png'),
  createCarteData('./img/Reinhardt.png'),
  createCarteData('./img/Lucio.png'),
  createCarteData('./img/Lucio.png'),
  createCarteData('./img/Dva.png'),
  createCarteData('./img/Dva.png'),
  createCarteData('./img/Lifeweaver.png'),
  createCarteData('./img/Lifeweaver.png'),
  createCarteData('./img/Eco.png'),
  createCarteData('./img/Eco.png'),
  createCarteData('./img/Sombra.png'),
  createCarteData('./img/Sombra.png'),
];
