import chairs from '../../public/asset/chairs.jpg';
import fridge from '../../public/asset/fridge.jpg';
import dinning_set from '../../public/asset/dinning_set.jpg';
import television from '../../public/asset/television.jpg';
import washing from '../../public/asset/washing_machine.jpg';
import sit_up from '../../public/asset/sit_up.jpg';
import mattress1 from '../../public/asset/mattress1.jpg';
import mattress2 from '../../public/asset/mattress2.jpg';
import dress_mirror from '../../public/asset/dress_mirror.jpg';
import bed_frame from '../../public/asset/bed_frame.jpg';
import generator from '../../public/asset/generator.jpg';
import sold from '../../public/asset/sold.webp';
import ac_indoor from '../../public/asset/ac_indoor.jpg';
import wardrobe from '../../public/asset/wardrobe.jpg';

interface Item {
  id: number;
  title: string;
  price?: number;
  img: any;
  sold?: any;
  desc: string;
  priority?: boolean;
}

const ItemsArray: Item[] = [
  {
    id: Math.random(),
    title: 'Sitting Chairs',
    price: 150,
    img: chairs,
    desc: 'Full Set of Sitting Chairs (3, 2, 1 Seater)',
    priority: true,
  },
  {
    id: Math.random(),
    title: 'Dining Chairs',
    price: 100,
    img: dinning_set,
    desc: '4 Seater Dinning Set',
    priority: true,
    sold: sold,
  },
  {
    id: Math.random(),
    title: 'Television',
    price: 350,
    img: television,
    desc: '55 inches Hisense Curve TV',
    priority: true,
    sold: sold,
  },
  {
    id: Math.random(),
    title: 'Air Condition',
    price: 45,
    img: ac_indoor,
    desc: '1.5 Horse Power AC (Indoor and Outdoor Unit)',
    sold: sold,
  },
  {
    id: Math.random(),
    title: 'Mattress',
    price: 40,
    img: mattress2,
    desc: '6 x 6 Bed Mattress',
  },
  {
    id: Math.random(),
    title: 'Washing Machine',
    price: 220,
    img: washing,
    desc: 'Nexus 12.0kg Automatic Washing Machine (Soak, Wash, Rinse & Spin)',
  },
  {
    id: Math.random(),
    title: 'Hisense Fridge',
    price: 150,
    img: fridge,
    desc: '262 L Volume Hisense Fridge + Freezer',
  },
  {
    id: Math.random(),
    title: 'Generator',
    price: 65,
    img: generator,
    desc: '22 Litters INC 2500 Petrol Generator',
  },
  {
    id: Math.random(),
    title: 'Sit Up Bench',
    price: 30,
    img: sit_up,
    desc: 'Sit Up Bench for Workout',
  },
  {
    id: Math.random(),
    title: 'Mattress',
    price: 60,
    img: mattress1,
    desc: 'Vita Form 6 x 6 Bed Mattress',
  },
  {
    id: Math.random(),
    title: 'Bed Frame',
    price: 230,
    img: bed_frame,
    desc: '6 x 6 Bed Frame + Back Rest, 2 Side Drawers and Dressing Mirror + Stool',
  },
  {
    id: Math.random(),
    title: 'Dressing Mirror',
    img: dress_mirror,
    desc: 'Dressing Mirror + 3 Locker and a Dressing Stool',
  },
  {
    id: Math.random(),
    title: 'Waldrobe',
    price: 40,
    img: wardrobe,
    desc: '3 Door waldrobe',
    sold: sold,
  },
];

export default ItemsArray;
