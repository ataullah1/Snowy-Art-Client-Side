import { FaRegHeart } from 'react-icons/fa';
// import card1 from '../../assets/sliderImg/card/17.jpg';
import { SlSizeFullscreen } from 'react-icons/sl';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
// import card2 from '../../assets/sliderImg/card/2.jpg';

const ItemSingleCard = ({ dta }) => {
  // console.log(dta);
  return (
    <div
      data-aos="zoom-in"
      className="bg-white min-w-[380px] max-w-[500px] mx-auto p-3 border rounded-lg hover:scale-105 duration-200 space-y-3 hover:shadow-xl"
    >
      <div className="relative w-full h-56">
        <div className="relative w-full h-full">
          <img
            className="rounded-lg w-full h-full bg-cover overflow-hidden"
            src={dta.image}
            alt=""
          />
          <div className="absolute bg-[#00000047] w-full h-full top-0 left-0 right-0 bottom-0 rounded-lg"></div>
        </div>
        <div className="absolute bottom-3 w-full flex justify-between px-4 items-center">
          <h1 className="text-2xl text-white font-bold">
            {dta.price}
            <span className="text-lg">/mo</span>
          </h1>
          <span className="text-white hover:text-redLi bg-[#17161689] p-2 rounded-md cursor-pointer">
            <FaRegHeart />
          </span>
        </div>
        <button className="bg-redLi py-1 px-2 absolute top-3 right-3 rounded-md text-white text-sm">
          For {dta.status}
        </button>
      </div>
      <div className="space-y-2 px-3">
        <p className="text-redLi font-semibold">{dta.segment_name}</p>
        <div className="sm:h-[90px] space-y-3">
          <h1 className="text-2xl font-bold text-black">{dta.estate_title}</h1>
          <p>{dta.estate_shot_description}.</p>
        </div>
        <hr />
        <div className="flex items-center justify-between py-2 gap-2 text-redLi">
          <div className="bg-[#3bf5f853] py-1 px-2 flex items-center justify-center rounded gap-2 text-base font-semibold mx-auto">
            <span className="text-xs">
              <SlSizeFullscreen />
            </span>
            {dta.area} Sq Ft
          </div>
          <div className="bg-[#c9f15b67] py-1 px-2 flex items-center justify-center rounded gap-2 text-base font-semibold mx-auto">
            {dta.facilities[2]}
          </div>
          <div className="bg-[#25eb8867] py-1 px-2 flex items-center justify-center rounded gap-2 text-base font-semibold mx-auto">
            {dta.facilities[1]}
          </div>
        </div>
        <hr className="pb-3" />
        <Link to={`/properti_details/${dta.id}`}>
          <button className="w-full py-2 px-3 rounded-md text-base font-bold border-redLi border-2 text-redLi hover:bg-redLi hover:text-white active:scale-95 duration-150">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemSingleCard;
ItemSingleCard.propTypes = {
  dta: PropTypes.object,
};
