import { useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import ItemSingleCard from './ItemSingleCard';
import { PropTypes } from 'prop-types';
const CraftItemsSection = ({ dta }) => {
  const [showDta, setShowDta] = useState(6);
  // console.log(dta);
  return (
    <div className="pb-14">
      <div>
        <h1 className="text-3xl md:text-5xl text-center pt-10 md:pt-20 font-bold pb-2">
          Art & Craft Items
        </h1>
        <p className="max-w-[700px] mx-auto text-center ">
          {`Discover a trove of artisanal wonders at SnowyArt's Art Craft Items
        Section. From handmade ceramics to intricate textiles, find treasures to
        inspire your creativity.`}
        </p>
      </div>

      {/* <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="rounded-lg border-2 border-firstColor w-full min-h-72 p-2 hover:shadow-lg duration-150">
          <div className="rounded-md h-56 w-full overflow-hidden relative">
            <div
              className="h-full bg-cover bg-no-repeat p-12 text-center rounded-md relative hover:scale-110 hover:rotate-3 duration-[2s]"
              style={{
                backgroundImage: `url(${card1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-md"
                style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
              ></div>
            </div>
            <div className="flex justify-between items-center absolute w-full bottom-0 z-20 px-3 pb-3">
              <h1 className="text-white text-3xl font-bold italic">$234</h1>
              <button className="text-white bg-slate-600 p-1 text-2xl rounded-md hover:text-firstColor">
                <BiHeart />
              </button>
            </div>
          </div>
          <div className="">
            <h3 className="text-left font-bold text-secondColor pt-3">
              Lorem, ipsum dolor.
            </h3>
            <h1 className="text-2xl font-bold  pb-3">
              Lorem ipsum dolor sit amet. Lorem, ipsum.{' '}
            </h1>
            <p className="pb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              obcaecati hic aut ad maiores, laboriosam, soluta consectetur
              quibusdam?
            </p>
            <div className="text-xl flex gap-2 items-center pb-4">
              <div className="flex gap-1 text-firstColor">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <p>(24)</p>
            </div>
            <Link to={'/'}>
              <button className="w-full px-2 py-2 border-2 border-firstColor bg-transparent hover:bg-firstColor text-firstColor hover:text-white font-bold rounded-md duration-150 active:scale-95">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {dta.slice(0, showDta).map((data) => (
            <ItemSingleCard key={data._id} data={data} />
          ))}
        </div>
        {showDta !== dta.length && (
          <p
            data-aos="fade-down"
            className="py-2 px-4 text-center cursor-pointer mt-8 underline flex items-center gap-2 justify-center hover:text-redLi text-lg"
            onClick={() => setShowDta(dta.length)}
          >
            View More Items
            <span className="text-2xl">
              <MdArrowRightAlt />
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CraftItemsSection;
CraftItemsSection.propTypes = {
  dta: PropTypes.array,
};
