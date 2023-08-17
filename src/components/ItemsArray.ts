import chairs from '../../public/asset/chairs.jpg';
import fridge_close from '../../public/asset/fridge_close.jpg';
import dinning_set from '../../public/asset/dinning_set.jpg';
import television from '../../public/asset/television.jpg';
import washing from '../../public/asset/washing_machine.jpg';
import sit_up from '../../public/asset/sit_up.jpg';
import mattress from '../../public/asset/mattress.jpg';
import side_drawer1 from '../../public/asset/side_drawer1.jpg';
import side_drawer2 from '../../public/asset/side_drawer2.jpg';
import dress_mirror from '../../public/asset/dress_mirror.jpg';
import bed_frame from '../../public/asset/bed_frame.jpg';
import fridge_open from '../../public/asset/fridge_open.jpg';
import generator from '../../public/asset/generator.jpg';
import sold from '../../public/asset/sold.webp';

interface Item {
  id: number;
  title: string;
  img: any;
  sold?: any;
  desc: string;
  priority?: boolean;
}

const ItemsArray: Item[] = [
  {
    id: Math.random(),
    title: 'Sitting Chairs',
    img: chairs,
    desc: 'Full Set of Sitting Chairs (3, 2, 1 Seater)',
    priority: true,
  },
  {
    id: Math.random(),
    title: 'Dining Chairs',
    img: dinning_set,
    desc: '4 Seater Dinning Set',
    priority: true,
  },
  {
    id: Math.random(),
    title: 'Television',
    img: television,
    desc: '55 inches Hisense Curve TV',
    priority: true,
    sold: sold,
  },
  {
    id: Math.random(),
    title: 'Washing Machine',
    img: washing,
    desc: 'Nexus 12.0kg Automatic Washing Machine (Soak, Wash, Rinse & Spin)',
  },
  {
    id: Math.random(),
    title: 'Generator',
    img: generator,
    desc: '22 Litters INC 2500 Petrol Generator',
  },
  {
    id: Math.random(),
    title: 'Sit Up Bench',
    img: sit_up,
    desc: 'Sit Up Bench for Workout',
  },
  {
    id: Math.random(),
    title: 'Bed Frame',
    img: mattress,
    desc: '6 x 6 Bed Frame (Without Back Rest)',
  },
  {
    id: Math.random(),
    title: 'Bed Frame',
    img: bed_frame,
    desc: '6 x 6 Bed Frame (With Back Rest)',
  },
  {
    id: Math.random(),
    title: 'Dressing Mirror',
    img: dress_mirror,
    desc: 'Dressing Mirror + 3 Locker and Dressing Stool',
  },
  {
    id: Math.random(),
    title: 'Side Drawer 1',
    img: side_drawer1,
    desc: 'Bed Frame Side Drawer 1',
  },
  {
    id: Math.random(),
    title: 'Side Drawer 2',
    img: side_drawer2,
    desc: 'Bed Frame Side Drawer 2',
  },
  {
    id: Math.random(),
    title: 'Hisense Fridge',
    img: fridge_open,
    desc: '262 L Volume Hisense Fridge + Freezer (Inside View)',
  },
  {
    id: Math.random(),
    title: 'Hisense Fridge',
    img: fridge_close,
    desc: '262 L Volume Hisense Fridge + Freezer (Outside View)',
  },
];

export default ItemsArray;
