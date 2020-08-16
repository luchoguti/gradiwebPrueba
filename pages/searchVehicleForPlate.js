import Layout from '../components/Layout';
import {API_BASE_URL} from '../config';
import { Card } from 'react-bootstrap';

const searchVehicleForPlate = (props) => {
    if(Object.keys(props.actToAct).length > 0){
        return (
            <Layout>
                <Card>
                    <Card.Header>Number License Plate: {props.actToAct.number_license_plate}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Trade Mark:
                            { props.actToAct.trade_mark[0].name_mark }
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            Type Vehicle:
                            { props.actToAct.type_vehicle[0].name_type_vehicle }
                        </footer>
                        </blockquote>
                    </Card.Body>
                    </Card>
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
searchVehicleForPlate.getInitialProps = async (ctx) => {
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
export default searchVehicleForPlate;