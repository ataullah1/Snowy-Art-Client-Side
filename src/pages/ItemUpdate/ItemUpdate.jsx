import { useParams } from 'react-router-dom';

const ItemUpdate = () => {
  const id = useParams();
  return (
    <div>
      <h1>Item Update {id}</h1>
    </div>
  );
};

export default ItemUpdate;
