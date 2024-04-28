import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../assets/banner/img10.jpg';
import { useContext } from 'react';
import { ContextAuth } from '../../provider/Provider';
import MyArtCraftSingleCard from './MyArtCraftSingleCard';
const MyArtCraftList = () => {
  const { userDta } = useContext(ContextAuth);
  const data = useLoaderData();
  const filterMyDta = data.filter((dta) => dta.email === userDta.email);
  // console.log(filterMyDta);

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
          <div className="">
            {filterMyDta.map((dta) => (
              <MyArtCraftSingleCard key={dta._id} dta={dta} />
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
