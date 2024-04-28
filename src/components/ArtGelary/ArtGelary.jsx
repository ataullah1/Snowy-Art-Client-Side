import img1 from '../../assets/gelary/img6.png';
import img2 from '../../assets/gelary/img18.jpg';
import img3 from '../../assets/gelary/img2.jpg';
import img4 from '../../assets/gelary/img14.jpg';
import img5 from '../../assets/gelary/img11.png';
import img6 from '../../assets/gelary/img1.jpg';

const ArtGelary = () => {
  return (
    <div>
      <div>
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
      <div className="grid grid-cols-4 gap-2">
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
            backgroundImage: `url(${img2})`,
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
          className="h-64  rounded-md"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64  rounded-md"
          style={{
            backgroundImage: `url(${img5})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div
          className="h-64  rounded-md col-span-2"
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
