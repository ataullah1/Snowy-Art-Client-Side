import { useLoaderData } from 'react-router-dom';
import ArtCraftCategoriesSection from '../../components/ArtCraftCategoriesSection/ArtCraftCategoriesSection';
import Banner from '../../components/Banner/Banner';
import CraftItemsSection from '../../components/CraftItemsSection/CraftItemsSection';
import { useEffect, useState } from 'react';

const Home = () => {
  const dta = useLoaderData();
  const url = 'http://localhost:3000/art-craft-items-categories';
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  // console.log(data);

  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto">
        <CraftItemsSection dta={dta} />
        <ArtCraftCategoriesSection data={data} />
      </div>
    </div>
  );
};

export default Home;
