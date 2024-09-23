import Image, { StaticImageData } from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';


const Gallery = ({ items }: { items: Array<string | StaticImageData> }) => (
  <ResponsiveMasonry
    columnsCountBreakPoints={{
      1024: 4,
      760: 3,
      500: 2,
    }}
    className='w-full'
  >
    <Masonry columnsCount={4} className='items-end'>
      {items.map((item, index) => (
        <div
          className='relative bottom-0 m-[5px] flex cursor-pointer items-center justify-center bg-gradient-to-br from-transparent to-[#5a5f92] p-[7px] hover:bottom-[10px]'
          key={index}
        >
          <Image
            className='grayscale-[85%] hover:grayscale-0'
            width={700}
            src={item}
            alt='galery item'
          />
        </div>
      ))}
    </Masonry>
  </ResponsiveMasonry>
);

export default Gallery;