import Banner from '../../components/Banner/Banner';
import CraftItemsSection from '../../components/CraftItemsSection/CraftItemsSection';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="w-11/12 mx-auto">
        <CraftItemsSection />
      </div>
    </div>
  );
};

export default Home;
