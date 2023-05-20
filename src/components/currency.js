import { useState,useEffect } from "react";
import TableComponent from "./table.js";


function FetchData(){
    const [myArr,setMyArr] = useState([]); //usestate to update myArr each time data changes in api

    useEffect(()=>{fetching()},[]); //rendering the data only once with []

    //fetch api data and save it in myArr 
    function fetching(){
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setMyArr(data);
        })
    }
    console.log(myArr);

    //returns table with heading and data in rows
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product symbol</th>
                    <th>Current Price</th>
                    <th>Market Capital</th>
                    <th>Capital Rank</th>
                    <th>Total Volume</th>
                    <th>Price Change</th>
                    <th>Date</th>
                    <th>Last Updated</th>
                    <th>Circulating Supply</th>
                </tr>
            </thead>
            <tbody>
            {myArr.map((array)=>{
                    return (
                        <TableComponent {...array}/>
                    )
            }
            )}
           </tbody>
       </table>
        </>
    )
}

export default FetchData;
