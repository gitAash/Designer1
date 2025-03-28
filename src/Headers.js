import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Headers = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold">My Store</h1>
      <button onClick={() => navigate("/cart")} className="text-blue-500">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </button>
    </header>
  );
};
export default Headers;