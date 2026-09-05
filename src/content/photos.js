import hero from '../assets/photos/hero.jpg';
import climb1 from '../assets/photos/climb-1.jpg';
import climb2 from '../assets/photos/climb-2.jpg';
import run1 from '../assets/photos/run-1.jpg';
import cycle1 from '../assets/photos/cycle-1.jpg';
import mountain1 from '../assets/photos/mountain-1.jpg';
import trail1 from '../assets/photos/trail-1.jpg';
import city1 from '../assets/photos/city-1.jpg';
import portrait from '../assets/photos/portrait.png';

export const photos = [
  {
    id: 'hero-ridge',
    src: hero,
    title: 'High country light',
    place: 'Placeholder — replace with your shot',
    category: 'Mountains',
  },
  {
    id: 'climb-line',
    src: climb1,
    title: 'On the line',
    place: 'Placeholder climbing frame',
    category: 'Climbing',
  },
  {
    id: 'granite',
    src: climb2,
    title: 'Granite weather',
    place: 'Placeholder climbing frame',
    category: 'Climbing',
  },
  {
    id: 'long-run',
    src: run1,
    title: 'Early miles',
    place: 'Placeholder running frame',
    category: 'Running',
  },
  {
    id: 'bike',
    src: cycle1,
    title: 'Road quiet',
    place: 'Placeholder cycling frame',
    category: 'Cycling',
  },
  {
    id: 'summit-air',
    src: mountain1,
    title: 'Summit air',
    place: 'Placeholder mountain frame',
    category: 'Mountains',
  },
  {
    id: 'trail',
    src: trail1,
    title: 'Trail edge',
    place: 'Placeholder trail frame',
    category: 'Running',
  },
  {
    id: 'london',
    src: city1,
    title: 'City pause',
    place: 'London',
    category: 'Life',
  },
  {
    id: 'portrait',
    src: portrait,
    title: 'Portrait',
    place: 'Alistair McMaster',
    category: 'Life',
  },
];

export const categories = ['All', ...new Set(photos.map((p) => p.category))];
