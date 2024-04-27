import { Link, useLoaderData, useParams } from 'react-router-dom';
import img1 from '../../assets/banner/img4.png';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { BiShareAlt } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi';

const ArtAndCraftDetails = () => {
  const { id } = useParams();
  const allDta = useLoaderData();
  const filterDta = allDta.find((dta) => dta._id === id);
  //   console.log(filterDta);
  const { photo, price, category, itemName, description, rating, stockStatus } =
    filterDta;
  return (
    <div>
      <div className="h-48 md:h-64 bg-fuchsia-100">
        <div className="h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: '0 -100px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
          <div className="absolute z-30 left-1/2 -translate-x-1/2 text-2xl sm:text-2xl text-white font-bold text-center top-28 md:top-36 w-full italic">
            <Link to={'/'}>
              <button className="italic">Home /</button>
            </Link>{' '}
            <Link to={'/all-art-craft-items'}>
              <button className="italic"> All Items</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-10">
        <div className="rounded-lg border-2 border-firstColor max-w-[700px] lg:max-w-full mx-auto hover:shadow-lg flex flex-col lg:flex-row gap-3 lg:gap-5">
          {/* Banner Image */}
          <div className="rounded-l-md h-80 sm:h-96 md:h-[500px] w-full lg:w-2/5 overflow-hidden relative">
            <div
              className="h-full bg-cover bg-no-repeat p-12 text-center rounded-l-md relative duration-[2s]"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-l-md"
                style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
              ></div> */}
            </div>

            <button
              // onClick={() => imageFullScreen(photo)}
              className="absolute bottom-2 z-20 right-2 text-white bg-slate-500 p-1 text-2xl rounded-md hover:text-firstColor"
            >
              <AiOutlineFullscreen />
            </button>
          </div>
          {/* Content */}
          <div className="w-full lg:w-3/5 pt-3">
            <h1 className="text-4xl font-bold  pb-3">{itemName}</h1>{' '}
            <div className="flex justify-between">
              <div className="text-xl flex gap-2 items-center">
                <div className="flex gap-1 text-firstColor">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStarHalfStroke />
                </div>
                <p className="text-secondColor cursor-pointer hover:underline">
                  ({rating}) Ratings
                </p>
              </div>
              <div className="text-2xl md:text-3xl flex gap-4 pr-5">
                <span className="cursor-pointer hover:text-firstColor">
                  <BiShareAlt />
                </span>
                <span className="cursor-pointer hover:text-firstColor">
                  <HiOutlineHeart />
                </span>
              </div>
            </div>
            <hr className="my-5" />
            <h1 className="text-3xl font-bold pt-3 text-firstColor">
              $ {price}
            </h1>
            <h3 className="text-xl text-left font-bold text-secondColor pt-3">
              {category}
            </h3>
            <p className="pb-3 flex flex-grow text-lg">{description}</p>
            <div className="flex gap-4 items-center pb-4 justify-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftDetails;
