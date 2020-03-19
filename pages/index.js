import Stats from "../components/stats";
import CountrySelector from '../components/countrySelector';
import style from './index.module.css'
import Precaution from "../components/precaution";

const Index = () =>{
    return(
        <div className={style.container}>
            <h1>World Data</h1>
            <Stats url='https://covid19.mathdro.id/api/' />
            <CountrySelector />
            <Precaution />
        </div>
    )
}

export default Index;