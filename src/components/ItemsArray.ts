import chairs from '../../public/asset/chairs.jpg';
import fridge from '../../public/asset/fridge.jpg';
import dinning_set from '../../public/asset/dinning_set.jpg';
import television from '../../public/asset/television.jpg';
import washing from '../../public/asset/washing_machine.jpg';

interface Item {
  id: number;
  title: string;
  img: any;
  desc: string;
}

const ItemsArray: Item[] = [
  {
    id: Math.random(),
    title: 'Chairs',
    img: chairs,
    desc: 'This is a full set of chairs',
  },
  {
    id: Math.random(),
    title: 'Television',
    img: television,
    desc: 'This is a Television',
  },
  {
    id: Math.random(),
    title: 'Dining Chairs',
    img: dinning_set,
    desc: 'This is a full set of chairs',
  },
  {
    id: Math.random(),
    title: 'Washing Machine',
    img: washing,
    desc: 'This is an automatic washing machine',
  },
  {
    id: Math.random(),
    title: 'Hisense Fridge',
    img: fridge,
    desc: 'This is a fridge',
  },
];

export default ItemsArray;
