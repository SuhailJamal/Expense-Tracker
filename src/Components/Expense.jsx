import './Expense.css'
export default function Expense(props){
    return(
        <>
     <div className='container'>
        <div className='container-name'>{props.name}</div>
        <div className='container-price'>{props.price}Rs.</div>
     </div>
        </>
    )
}