import './Expense.css'
import Expense from "./Expense";
export default function Main(props) {
    let key = 0;
let total = 0;
  const Ans = props.ans.map((item) => {
    total = total + parseFloat(item.price);
    return <Expense key = {key++} name={item.name} price={parseFloat(item.price)} />;
  });
  return (<>
  <div className='container bg-white'>
        <div className='container-name'>Expense Name</div>
        <div className='container-price'>Price</div>
     </div>
  {Ans}
  <div className='container bg-white'>
        <div className='container-name'>TOTAL</div>
    <div className='container-price'>{total}Rs.</div>
     </div>

  </>);
}
