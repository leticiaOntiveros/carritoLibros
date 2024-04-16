import { useContext} from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({product}) => {
  const {cart, setCart, addToCart} = useContext(dataContext);
 
 const decrese = () =>{
  const productExist = cart.find((item) => item.id === product.id);

        if(productExist.quanty !== 1){
            setCart(cart.map((item) => item.id === product.id ? {...product, quanty: productExist.quanty - 1} : item));
        }
        
    };

  return (
   <>
   <p className="counter-button" onClick={decrese}>-</p>
   <p>{product.quanty}</p>
   <p className="counter-button" onClick={()=> addToCart(product)}>
    +</p>
   </>
  );
};

export default CartItemCounter;