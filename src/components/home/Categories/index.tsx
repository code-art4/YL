import Cat__1 from 'assets/images/cat__1.png';
import Cat__2 from 'assets/images/cat__2.png';
import Cat__3 from 'assets/images/cat__3.png';
import Cat__4 from 'assets/images/cat__4.png';
import Cat__5 from 'assets/images/cat__5.png';
import Cat__6 from 'assets/images/cat__6.png';
import Shop from 'assets/images/shop-categories.png';

const categories = [
  { image: Cat__1, title: 'Art and Crafts' },
  { image: Cat__2, title: 'Notebook and Diaries' },
  { image: Cat__3, title: 'Adhesive Stationery' },
  { image: Cat__4, title: 'Pen and Pencils' },
  { image: Cat__5, title: 'File and Folders' },
  { image: Cat__6, title: 'Other Stationery Items' },
];

const Categories = () => {
  return (
    <div className='w-[90%] mx-auto text-center'>
      <div>
        <h2 className='text-3xl mb-4 font-bold'>Shop By Categories</h2>
        <p className='text-secondary w-[30%] mx-auto'>
          Essential Office Supplies In Our Online Stationery Shop That Keep Your
          Office Operations Smooth And Efficient
        </p>
      </div>

      <div className='mt-20 w-[90%] mx-auto flex justify-between'>
        {categories?.map((each) => {
          return (
            <div className='w-max h-max cursor-pointer'>
              <img
                src={each?.image}
                alt='Category 1'
                className='w-[10rem] h-[10rem] object-cover'
              />
              <p className='font-semibold mt-2'>{each?.title}</p>
            </div>
          );
        })}
      </div>

      <div className='mt-32 w-[90%] mx-auto rounded-3xl overflow-hidden'>
        <img
          src={Shop}
          alt='Shop'
          className='w-full h-[36rem] object-cover'
        />
      </div>
    </div>
  );
};

export default Categories;