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
