import { useLoaderData } from 'react-router-dom';
import ArtCraftCategoriesSection from '../../components/ArtCraftCategoriesSection/ArtCraftCategoriesSection';
import Banner from '../../components/Banner/Banner';
import CraftItemsSection from '../../components/CraftItemsSection/CraftItemsSection';

const Home = () => {
  const dta = useLoaderData();
  // console.log(dta);
  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto">
        <CraftItemsSection dta={dta} />
        <ArtCraftCategoriesSection />
      </div>
    </div>
  );
};

export default Home;
