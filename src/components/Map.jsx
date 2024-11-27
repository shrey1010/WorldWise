import styles from './Map.module.css'
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
function Map(){
    const navigate = useNavigate();
    const [searchParams , setSearchParams] = useSearchParams()
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    const [searchParams , setSearchParams] = useSearchParams()
    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")
    return (<div className={styles.mapContainer} onClick={()=>navigate("form")}>
        <button onClick={()=>{setSearchParams({lat:23,lng:50})}}>ChangePos</button>        <button onClick={()=>{setSearchParams({lat:23,lng:50})}}>ChangePos</button>
    </div>)
}

export default Map;