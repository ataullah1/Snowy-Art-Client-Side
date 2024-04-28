import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../assets/banner/img10.jpg';
import { useContext } from 'react';
import { ContextAuth } from '../../provider/Provider';
import Swal from 'sweetalert2';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { BiShareAlt } from 'react-icons/bi';
const MyArtCraftList = () => {
  const { userDta } = useContext(ContextAuth);
  const data = useLoaderData();
  const filterMyDta = data.filter((dta) => dta.email === userDta.email);
  // console.log(filterMyDta);
  // buy add card alart
  const handleBuy = () => {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'You have successfully purchased this item.',
      showConfirmButton: true,
      timer: 2500,
    });
  };
  const handleAddToCard = () => {
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'You have successfully added this item to the card.',
      showConfirmButton: true,
      timer: 2500,
    });
  };

  return (
    <div>
      {/* Top Banner Img */}
      <div className="h-48 md:h-64 bg-fuchsia-100">
        <div className="h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed flex items-center justify-center"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
          <div className="absolute z-30 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl text-white font-bold text-center top-28 md:top-36 w-full italic">
            <Link to={'/'}>
              <button className="italic">Home /</button>
            </Link>{' '}
            <Link to={'/my-art-craft-list'}>
              <button className="italic">My Art & Craft</button>
            </Link>
          </div>
        </div>
      </div>
      {/* End Banner top */}
      <div className="w-11/12 mx-auto">
        {filterMyDta ? (
          <div>
            {filterMyDta.map((dta) => (
              <div
                key={dta._id}
                className="rounded-lg border-2 border-firstColor max-w-[700px] lg:max-w-full mx-auto hover:shadow-lg flex flex-col lg:flex-row gap-3 lg:gap-5 items-center"
              >
                {/* Banner Image */}
                <div className="rounded-t-md lg:rounded-t-none lg:rounded-l-md h-[370px] w-full lg:w-2/5 overflow-hidden relative border-r">
                  <div
                    className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md lg:rounded-t-none lg:rounded-l-md relative duration-[2s]"
                    style={{
                      backgroundImage: `url(${dta.photo})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>

                  <button
                    // onClick={() => imageFullScreen(photo)}
                    className="absolute bottom-2 z-20 right-2 text-white bg-slate-500 p-1 text-2xl rounded-md hover:text-firstColor"
                  >
                    <AiOutlineFullscreen />
                  </button>
                </div>
                {/* Content */}
                <div className="w-full lg:w-3/5 p-4 lg:p-0">
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    {dta.itemName}
                  </h1>{' '}
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
                        ({dta.rating}) Ratings
                      </p>
                    </div>
                    <div className="text-2xl md:text-3xl flex gap-4 pr-5">
                      <span className="cursor-pointer hover:text-firstColor hover:scale-125 duration-300">
                        <BiShareAlt />
                      </span>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <h1 className="text-3xl font-semibold text-firstColor heightFont">
                    $ {dta.price}
                  </h1>
                  <p className="pt-2 flex flex-grow text-base max-w-[600px]">
                    {dta.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:gap-4 lg:gap-2 xl:gap-5">
                    <div className="sm:border-r sm:pr-4">
                      <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
                        <span>Categories: </span>
                        <span className="px-2 border rounded text-firstColor">
                          {' '}
                          {dta.category}
                        </span>
                      </h3>
                      <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
                        <span>Stock Status: </span>
                        <span className="px-2 border rounded text-firstColor">
                          {' '}
                          {dta.stockStatus}
                        </span>
                      </h3>
                    </div>

                    <div>
                      <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
                        <span>Processing Time: </span>
                        <span className="px-2 border rounded text-firstColor">
                          {' '}
                          {dta.processing_time.length === 1
                            ? '0' + dta.processing_time
                            : dta.processing_time}{' '}
                          Hours
                        </span>
                      </h3>
                      <h3 className="lg:text-lg xl:text-xl text-left font-bold text-secondColor pt-2">
                        <span>Customization: </span>
                        <span className="px-2 border rounded text-firstColor">
                          {' '}
                          {dta.customization}
                        </span>
                      </h3>
                    </div>
                  </div>
                  <h3 className="text-lg text-left font-semibold pt-1">
                    <span>Published by: </span>
                    <span className="px-2">You</span>
                  </h3>
                  <div className="flex gap-5 items-center pt-3 pb-2">
                    <button
                      className="w-40 py-2 font-semibold text-white hover:-translate-y-1 duration-200 bg-secondColor hover:bg-[#2d8e8b]"
                      onClick={handleBuy}
                    >
                      Update
                    </button>
                    <button
                      className="w-40 py-2 font-semibold text-white hover:-translate-y-1 duration-200 bg-red-500 hover:bg-[#bf2f2f]"
                      onClick={handleAddToCard}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>Jao sona age data add kore aso</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyArtCraftList;
