import FetchData from "../utils/fetchData"
import { useState } from "react";
import Stats from "./stats";
import style from './index.module.css';

const CountrySelecetor = () =>{
    const [country , setCountry] = useState('IND');
    const [name , setName] = useState('India');

    const handleChange = (e) =>{
        console.log(e.target.value);
        let code = e.target.value.split(',');
        setCountry(code[0]);
        setName(code[1]);
    }

    const {loading , error , data} = FetchData('https://covid19.mathdro.id/api/countries');
    if(loading) return <p>Loading....</p>
    if(error) return <p>Can't find countries.Try Again Later</p>
    if(!data) return <p>Loading...</p>
    
    return(
        <div className={style.countrySelector}>
            <select className={style.select} onChange={handleChange}>
                {
                    Object.entries(data.countries).map(([countries , code])=>{
                        return(
                            <option selected={country===data.iso3[code]} value={`${data.iso3[code]},${countries}`} key={countries+code}>
                                {countries}
                            </option>
                        )
                    })
                }
            </select>
            <br/>
            <h1>Currently showing <span className={style.name}>{`${name}`}</span></h1>
            <Stats url={`https://covid19.mathdro.id/api/countries/${country}`}/>
        </div>
    )
}

export default CountrySelecetor;