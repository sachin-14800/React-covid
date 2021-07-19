import React,{useEffect,useState} from 'react';
import CameraIcon from '@material-ui/icons/Camera';

const IndianCovid=()=>{
    const [data,setData]=useState([]);
    const getCovidData=async ()=>{
        const res= await fetch('https://api.covid19india.org/data.json');
        const actualdata= await res.json();
        console.log(actualdata.statewise);
        setData(actualdata.statewise);
    }

    useEffect(()=>{
        getCovidData();
    },[]);
    return (
        <>
        <h1 style={{textAlign:'center',backgroundColor: 'wheat'}}>INDIA <CameraIcon className="icon"/> COVID 19 STATEWISE DASHBOARD</h1>
        <div className="table table-responsive">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((currElem,index)=>{
                            return (
                                <tr key={index}>
                        <th className="table-primary">{currElem.state}</th>
                        <td className="table-secondary">{currElem.confirmed}</td>
                        <td className="table-success">{currElem.recovered}</td>
                        <td className="table-danger">{currElem.deaths}</td>
                        <td className="table-info">{currElem.active}</td>
                        <td className="table-warning">{currElem.lastupdatedtime}</td>
                    </tr>
                            )
                        })
                    }
                
                </tbody>
            </table>
        </div>
        </>
    )
}
export default IndianCovid;