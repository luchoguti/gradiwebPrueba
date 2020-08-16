import Layout from '../components/Layout';
import {API_BASE_URL} from '../config';
import { ListGroup } from 'react-bootstrap';
import styles from '../components/FormEndPoint.module.css';

const searchVehicleForNumberLicence = (props) => {
    if(Object.keys(props.actToAct).length > 0){
        return (
            <Layout>
                <ListGroup>
                  {
                    props.actToAct.map((data)=>(
                        <ListGroup.Item className={styles.listResult}>
                            <p>Count Vehicle: {data.count_vehicle}</p>
                            <p>Name Mark: {data.name_mark}</p>
                        </ListGroup.Item>
                    ))
                  }
                </ListGroup>
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
searchVehicleForNumberLicence.getInitialProps = async (ctx) => {
    const resp = await fetch(`${API_BASE_URL}${ctx.query.url}${ctx.query.value}`);
    const dataResp = await resp.json();
    if(Object.keys(dataResp).length > 0){
        return {
            actToAct:dataResp
        }
    }else{
        return {
            actToAct:{}
        } 
    }
}
export default searchVehicleForNumberLicence;