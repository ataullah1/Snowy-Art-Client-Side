// import img1 from '../../assets/categories/img1.jpg';
import img2 from '../../assets/categories/img2.jpg';
// import img3 from '../../assets/categories/img3.jpg';
// import img4 from '../../assets/categories/img4.jpg';
// import img5 from '../../assets/categories/img6.jpg';
// import img6 from '../../assets/categories/img7.jpg';

import { PropTypes } from 'prop-types';

const ArtCraftCategoriesSection = ({ data }) => {
  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-5xl text-center pt-5 font-bold pb-2">
          Art & Craft Categories
        </h1>
        <p className="max-w-[700px] mx-auto text-center ">
          {`Explore a winter wonderland of creativity with SnowyArt's diverse art and craft categories, offering inspiration and supplies for every project.`}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((dta, i) => (
          <div key={i} className="border-2 border-firstColor rounded-lg">
            <div className="cursor-pointer">
              <div className="rounded-t-md h-52 w-full overflow-hidden">
                <div
                  className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                    style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                  ></div>
                </div>
              </div>
              <h1 className="text-3xl text-center font-bold py-3 px-2">
                {dta.categories_name}
              </h1>
            </div>
          </div>
        ))}
        {/* <div className="border-2 border-firstColor rounded-lg">
          <div className="cursor-pointer">
            <div className="rounded-t-md h-52 w-full overflow-hidden">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                  style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                ></div>
              </div>
            </div>
            <h1 className="text-3xl text-center font-bold py-3 px-2">
              Landscape Painting
            </h1>
          </div>
        </div>
        <div className="border-2 border-firstColor rounded-lg">
          <div className="cursor-pointer">
            <div className="rounded-t-md h-52 w-full overflow-hidden">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                  style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                ></div>
              </div>
            </div>
            <h1 className="text-3xl text-center font-bold py-3 px-2">
              Portrait Drawing
            </h1>
          </div>
        </div>
        <div className="border-2 border-firstColor rounded-lg">
          <div className="cursor-pointer">
            <div className="rounded-t-md h-52 w-full overflow-hidden">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                  style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                ></div>
              </div>
            </div>
            <h1 className="text-3xl text-center font-bold py-3 px-2">
              Watercolour Painting
            </h1>
          </div>
        </div>
        <div className="border-2 border-firstColor rounded-lg">
          <div className="cursor-pointer">
            <div className="rounded-t-md h-52 w-full overflow-hidden">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                style={{
                  backgroundImage: `url(${img4})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                  style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                ></div>
              </div>
            </div>
            <h1 className="text-3xl text-center font-bold py-3 px-2">
              Oil Painting
            </h1>
          </div>
        </div>
        <div className="border-2 border-firstColor rounded-lg">
          <div className="cursor-pointer">
            <div className="rounded-t-md h-52 w-full overflow-hidden">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                style={{
                  backgroundImage: `url(${img5})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                  style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                ></div>
              </div>
            </div>
            <h1 className="text-3xl text-center font-bold py-3 px-2">
              Charcoal Sketching
            </h1>
          </div>
        </div>
        <div className="border-2 border-firstColor rounded-lg">
          <div className="cursor-pointer">
            <div className="rounded-t-md h-52 w-full overflow-hidden">
              <div
                className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-3 duration-[2s]"
                style={{
                  backgroundImage: `url(${img6})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
                  style={{ backgroundColor: ' rgba(0, 0, 0, 0.4)' }}
                ></div>
              </div>
            </div>
            <h1 className="text-3xl text-center font-bold py-3 px-2">
              Cartoon Drawing
            </h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ArtCraftCategoriesSection;
ArtCraftCategoriesSection.propTypes = {
  data: PropTypes.array,
};
