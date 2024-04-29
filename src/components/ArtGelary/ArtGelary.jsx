import img1 from '../../assets/gelary/img6.png';
import img3 from '../../assets/gelary/img2.jpg';
import img4 from '../../assets/gelary/img14.jpg';
import img6 from '../../assets/gelary/img1.jpg';
import img7 from '../../assets/gelary/img7.jpg';
import img8 from '../../assets/gelary/img8.jpg';
import img9 from '../../assets/gelary/img9.png';
import img10 from '../../assets/gelary/img10.jpg';
import img11 from '../../assets/gelary/img12.png';

const ArtGelary = () => {
  return (
    <div>
      <div className="mt-6 mb-9">
        <h1 className="text-3xl md:text-5xl text-center pt-5 font-bold pb-2">
          Art Gallery
        </h1>
        <p className="max-w-[700px] mx-auto text-center ">
          {`  Welcome to SnowyArt's Art Gallery, where creativity knows no bounds.
          Explore a curated collection of exquisite art and craft pieces crafted
          with passion and skill.
        `}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div
          className="h-64  rounded-md col-span-2"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64  rounded-md"
          style={{
            backgroundImage: `url(${img8})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64  rounded-md"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="sm:h-full rounded-md sm:row-span-2 hidden sm:block"
          style={{
            backgroundImage: `url(${img9})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64 rounded-md col-span-2 sm:hidden"
          style={{
            backgroundImage: `url(${img11})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64  rounded-md"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64 rounded-md sm:col-span-2"
          style={{
            backgroundImage: `url(${img10})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64  rounded-md col-span-2"
          style={{
            backgroundImage: `url(${img7})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="sm:h-64 rounded-md col-span-1 sm:block hidden"
          style={{
            backgroundImage: `url(${img6})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
};

export default ArtGelary;
