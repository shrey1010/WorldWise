import styles from './Map.module.css'
import { useNavigate } from 'react-router-dom';
function Map(){
    const navigate = useNavigate();
    return (<div className={styles.mapContainer} onClick={()=>navigate("form")}>

    </div>)
}

export default Map;