import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { BiHeart } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const ItemSingleCard = ({ data }) => {
  console.log(data);
  const { photo, price, category, itemName, description, rating, stockStatus } =
    data;
  return (
    <div className="rounded-lg border-2 border-firstColor w-full min-h-72 p-2 hover:shadow-lg duration-150">
      <div className="rounded-md h-56 w-full overflow-hidden relative">
        <div
          className="h-full bg-cover bg-no-repeat p-12 text-center rounded-md relative hover:scale-110 hover:rotate-3 duration-[2s]"
          style={{
            backgroundImage: `url(${photo})`,
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
          <h1 className="text-white text-3xl font-bold italic">${price}</h1>
          <button className="text-white bg-slate-600 p-1 text-2xl rounded-md hover:text-firstColor">
            <BiHeart />
          </button>
        </div>
      </div>
      <div className="">
        <h3 className="text-left font-bold text-secondColor pt-3">
          {category}
        </h3>
        <h1 className="text-2xl font-bold  pb-3">{itemName}</h1>
        <p className="pb-3 flex flex-grow sm:min-h-28">{description}</p>
        <div className="flex gap-4 items-center pb-4 justify-between">
          <div className="text-xl flex gap-2 items-center">
            <div className="flex gap-1 text-firstColor">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <p>({rating})</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold pr-3">
              <span className="text-firstColor">$</span>
              {price}
            </h1>
          </div>
        </div>
        <Link to={'/'}>
          <button className="w-full px-2 py-2 border-2 border-firstColor bg-transparent hover:bg-firstColor text-firstColor hover:text-white font-bold rounded-md duration-150 active:scale-95">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemSingleCard;
ItemSingleCard.propTypes = {
  data: PropTypes.object,
};
