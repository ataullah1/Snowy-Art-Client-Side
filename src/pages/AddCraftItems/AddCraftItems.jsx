import Swal from 'sweetalert2';
import banner from '../../assets/banner/img9.jpg';

const AddCraftItems = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const dta = e.target;
    const name = dta.name.value;
    const chef = dta.chef.value;
    const supplier = dta.supplier.value;
    const taste = dta.taste.value;
    const category = dta.category.value;
    const details = dta.details.value;
    const photo = dta.photo.value;
    const price = dta.price.value;
    const formData = {
      name,
      chef,
      supplier,
      taste,
      category,
      photo,
      price,
      details,
    };
    // console.log(formData);
    fetch('https://coffee-store-serve-side.vercel.app/coffees', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((dta) => {
        // console.log(dta);
        if (dta.acknowledged) {
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Your Coffee has been successfully Added',
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
    dta.reset();
  };
  return (
    <div>
      {/* Banner image  */}
      <div className="h-52 md:h-72 bg-fuchsia-100">
        <div className="rounded-t-md h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${banner})`,
              backgroundPosition: 'top  ',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed rounded-t-md flex items-center justify-center"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main From */}
      <div className="rounded-lg py-5 px-6 md:px-8 lg:px-16 my-8 border-2 border-firstColor w-11/12 mx-auto">
        <h1 className="text-5xl font-bold text-center dark:text-white">
          Add Art & Craft Items
        </h1>
        <p className="max-w-[932px] text-center text-opacity-70 sm:text-lg mx-auto pt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          corporis quisquam delectus eum placeat, labore vitae quaerat fugiat
          voluptatum suscipit nisi est deleniti consectetur porro.
        </p>
        <hr className=" mt-3 mb-6" />
        <div>
          <form className="flex flex-col gap-5" onSubmit={handleAddCoffee}>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Name
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Chef
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Supplier
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Taste
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Category
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Price
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="price"
                  placeholder="Enter coffee price"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Photo
                </label>
                <input
                  required
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className=" text-opacity-80 text-lg font-semibold">
                  Details
                </label>
                <textarea
                  className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border min-h-10 h-10"
                  name="details"
                  placeholder="Enter coffee details"
                ></textarea>
                {/* <input
                    required
                    className=" placeholder-opacity-60 text-base font-normal py-2 px-4 rounded-md w-full outline-none border"
                    type="text"
                    name="details"
                    placeholder="Enter coffee details"
                  /> */}
              </div>
            </div>

            <button className="w-full py-1 bg-[#D2B48C] rounded-[5px] border-2 border-primaryColor text-primaryColor text-lg font-bold sm:text-2xl mb-5 md:mb-0 active:-skew-x-[30deg] duration-200">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItems;
<h1 className="text-6xl">AddCraftItems</h1>;
