import Stats from "../components/stats";
import CountrySelector from '../components/countrySelector';
import style from './index.module.css'
import Precaution from "../components/precaution";
import ErrorBoundary from "../components/ErrorBoundary";

const Index = () =>{
    return(
        <div className={style.container}>
            <h1>World Data</h1>
            <ErrorBoundary>
                <Stats url='https://covid19.mathdro.id/api/' />
            </ErrorBoundary>
            <ErrorBoundary>
               <CountrySelector />
            </ErrorBoundary>
            <Precaution />
        </div>
    )
}

export default Index;