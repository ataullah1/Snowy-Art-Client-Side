import img1 from '../../assets/banner/img9.jpg';

const AddCraftItems = () => {
  return (
    <div>
      <div className="h-52 md:h-72 bg-fuchsia-100">
        <div className="rounded-t-md h-full w-full overflow-hidden">
          <div
            className="h-full bg-cover bg-no-repeat p-12 text-center rounded-t-md relative hover:scale-110 hover:-rotate-1 duration-[2s] "
            style={{
              backgroundImage: `url(${img1})`,
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
    </div>
  );
};

export default AddCraftItems;
<h1 className="text-6xl">AddCraftItems</h1>;
