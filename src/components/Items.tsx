import Image from 'next/image';
import ItemsArray from './ItemsArray';

const Items = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-20 items-center justify-center flex-wrap'>
      {ItemsArray.map((item) => (
        <div key={item.id} className='max-w-lg bg-card rounded-2xl'>
          <Image
            src={item.img}
            alt={item.title}
            priority={item.priority}
            className='w-fit rounded-t-2xl'
          />
          <div className='p-4'>
            <h2 className='text-100 text-2xl'>{item.title}</h2>
            <p className='text-card-text mt-2'>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
