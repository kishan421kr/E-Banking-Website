import { useEffect, useState } from "react"
import DB_URL from "../config";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const MiniStatement=()=>{

    const [data , setData] = useState([]);

    const loadStatement =async()=>{
        const api = `${DB_URL}/transaction/miniStatement`

    const response = await axios.post(api , {customerId:localStorage.getItem("customerId")})
    // console.log(response.data);
        setData(response.data);
    }
    
    useEffect(()=>{
        loadStatement();
    },[])
    let Sr=0;
    return(
        <>
            <div id="minMainDiv">
                <h2 id="dashHeading2">Mini Statement</h2>

            
                

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Date</th>
                            <th>Debit/credit</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                            <tbody>
                                {data.map((key)=>{
                                    Sr++;
                                    return(
                                        <>
                                            <tr>
                                                <td>{Sr}</td>
                                                <td>{key.transactionAt}</td>
                                                { key.transactionType == 'credit' ? <td style={{color:"green"}}>{key.transactionType}</td> :<td style={{color:"red"}}>{key.transactionType}</td>  }
                                                {key.transactionType == 'credit' ? <td style={{color:"green"}}>{key.Amount}</td> :<td style={{color:"red"}}>{key.Amount}</td>}
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                </Table>
            </div>
        </>
    )
}

export default MiniStatement