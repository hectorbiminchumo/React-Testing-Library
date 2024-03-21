import Options from './Options'
import { useOrderDetails } from '../../contexts/OrderDetails';
import { formatCurrency } from '../../utilities';


const OrderEntry = () => {
  const { totals } = useOrderDetails();
  const grandTotal = totals.scoops + totals.toppings

  return (
    <div>
       <h1>Design Your Sundae!</h1>
        <Options optionType='scoops' />
        <Options optionType='toppings' />
        <h2>Grand total: { formatCurrency(grandTotal)}</h2>
    </div>
  )
}

export default OrderEntry