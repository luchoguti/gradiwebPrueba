
import Layout from '../components/Layout';
import SearchVehicleOwn from '../components/SearchVehicleOwn';
import {API_BASE_URL} from '../config';
import styles from '../components/FormEndPoint.module.css';


const numberIdentOwn = (props) =>{
    if(Object.keys(props.actToAct).length > 0){
        return (
            <Layout>
                <SearchVehicleOwn data={props.actToAct} style={styles}/>
            </Layout>
        )
    }else{
        return (
            <Layout>
                <h2>Without data...</h2>
            </Layout>
        )
    }
}
numberIdentOwn.getInitialProps = async (ctx) => {
    const resp = await fetch(`${API_BASE_URL}${ctx.query.url}${ctx.query.value}`);
    const dataResp = await resp.json();
    if(Object.keys(dataResp).length > 0){
        return {
            actToAct:dataResp.data[0]
        }
    }else{
        return {
            actToAct:{}
        } 
    }
}
export default numberIdentOwn;