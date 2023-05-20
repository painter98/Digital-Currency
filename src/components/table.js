import './table.css';

function TableComponent(array){//inside table
    //display each product data in table row 
    let price = array.price_change_percentage_24h;
                 return (
                    <>
                    <tr> 
                        <td><img className="image-one" src={array.image} alt="currency-image"/></td>
                        <td>{array.name} </td>
                        <td>{array.symbol}</td>
                        <td>${array.current_price}</td>
                        <td>${array.market_cap}</td>
                        <td>{array.market_cap_rank}</td>
                        <td>{array.total_volume}</td>
                        <td style={{color:price>=0?"green":'red'}}>{array.price_change_percentage_24h*100}%</td>
                        <td>{array.ath_date}</td>
                        <td>{array.last_updated}</td>
                        <td>{array.circulating_supply}</td>
                    </tr>
                    </>
                 )

}

export default TableComponent;