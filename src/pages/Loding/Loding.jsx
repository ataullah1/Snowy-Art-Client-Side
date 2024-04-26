import { Link } from 'react-router-dom';

const Loding = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link to={'/'} className="">
        <button className="py-2 px-5 bg-error text-white rounded-md font-semibold absolute bottom-6 left-1/2 -translate-x-1/2 hover:bg-orange-700">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Loding;