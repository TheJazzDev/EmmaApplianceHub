import Image from 'next/image';
import ItemsArray from './ItemsArray';

const Items = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-20 items-center justify-center flex-wrap'>
      {ItemsArray.map((item) => (
        <div key={item.id} className='max-w-lg bg-card rounded-2xl relative'>
          <Image
            src={item.img}
            alt={item.title}
            priority={item.priority}
            className='w-fit rounded-t-2xl'
          />
          <div className='p-4'>
            <h2 className='text-100 text-2xl'>{item.title}</h2>
            <p className='text-card-text text-left mt-2'><span className='font-bold text-100'>Description: </span>{item.desc}</p>
            <p className='text-card-text text-left mt-2'><span className='font-bold text-100'>Price: </span>{item.price}{item.price ? 'k' : 'Part of 230k Bed Frame Set'}</p>
          </div>
          {item.sold && (
            <Image
              src={item.sold}
              alt='Sold'
              priority={item.priority}
              className='w-60 absolute -top-10'
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Items;
