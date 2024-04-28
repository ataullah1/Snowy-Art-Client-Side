import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../assets/banner/img10.jpg';
import noFile from '../../assets/error/noDta.jpg';
import { useContext, useState } from 'react';
import { ContextAuth } from '../../provider/Provider';
import MyArtCraftSingleCard from './MyArtCraftSingleCard';
import axios from 'axios';
import Swal from 'sweetalert2';
const MyArtCraftList = () => {
  const { userDta } = useContext(ContextAuth);
  const data = useLoaderData();
  const filterDta = data.filter((dta) => dta.email === userDta.email);
  const [filterMyDta, setFilterMyDta] = useState(filterDta); //filterDta
  // console.log(filterDta);

  //  Delete Item Function Call
  const handleDeleteCard = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/item-deletes/${id}`)
          .then((response) => {
            console.log(`Deleted post with ID ${id},,,,,${response}`);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your item has been successfully deleted.',
              icon: 'success',
            });
            const deletedDtaRemove = filterDta.filter((dta) => dta._id !== id);
            setFilterMyDta(deletedDtaRemove);
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: 'Oppps!',
              text: 'Your item cannot be deleted !',
              icon: 'error',
            });
          });
      }
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
      <div className="w-11/12 mx-auto mt-8">
        {filterMyDta ? (
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">
            {filterMyDta.map((dta) => (
              <MyArtCraftSingleCard
                key={dta._id}
                dta={dta}
                handleDeleteCard={handleDeleteCard}
              />
            ))}
          </div>
        ) : (
          <div className="">
            <img className="max-h-[450px] mx-auto" src={noFile} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyArtCraftList;
