import React from 'react'
import FetchData from '../utils/fetchData'
import style from './index.module.css'

export default function Stats({url}) {
    const {loading , error , data} = FetchData(url);
    if(loading) return <p>Loading...</p>
    if(error) return <p>An Unexpected error occured</p>
    if(!data) return <p>Loading...</p>
   
    if(data){
        return (
            <div className={style.container}>
                <div className={[`${style.con} ${style.Statbox}`]}>
                    <h1>
                        Confirmed
                    </h1>
                    <span>
                        {data.confirmed.value}
                    </span>
                </div>
                <div className={[`${style.green} ${style.Statbox}`]}>
                    <h1>
                        Recovered
                    </h1>
                    <span>
                        {data.recovered.value}
                    </span>
                </div>
                <div className={[`${style.red} ${style.Statbox}`]}>
                    <h1>
                        Deaths
                    </h1>
                    <span>
                        {data.deaths.value}
                    </span>
                </div>
               </div>
        )
    }
}
