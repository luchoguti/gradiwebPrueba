
import { Alert,Row,Col,Container,Button } from 'react-bootstrap';
import FormEndPoint from '../components/FormEndPoint';
import { useState } from 'react';
import styles from './FormEndPoint.module.css';
import Router from 'next/router';

const ListEndPoint = (props) =>{
    const [dataEndpoint, setContact] = useState(
        props.endpoint
    );
    // Input field onChange handler
    const tagOnChange = (id,e) => {
        const { data, errors } = { ...dataEndpoint };
        const currentState = data;
        const { name, value } = e.target;
        currentState[id]["value"] = value;
        setContact({ data:currentState , errors: errors });
    }
    const sendRequest = async (object) =>{
        if(object.value != "" || object.parameters == 0){
            Router.push({
                pathname: '/'+object.name,
                query: object,
            });
        }else{
            alert('The field can´t empty!');
        }
    }
    return (
        <div className="list-group">
            {
                props.endpoint.data.map((endpoint,key)=>(
                    <Container key={key}>
                        <Row>
                            <Col xs={2}>
                                <Alert key={key} variant="success" >
                                    { endpoint.peticion }
                                </Alert>   
                            </Col>
                            <Col xs={10}>
                                <Alert key={key} variant="success" className={styles.alertEndPoint}>
                                    { endpoint.url_test }
                                <FormEndPoint
                                    change={tagOnChange}
                                    parameters={endpoint.parameters}
                                    name={endpoint.name}
                                    value={endpoint.value}
                                    id={key} 
                                    style={styles}/>
                                <Col xs="auto" className="my-1">
                                    <Button type="submit" onClick={()=>sendRequest(endpoint)}>Submit</Button>
                                </Col>
                                </Alert>   
                            </Col>
                        </Row> 
                    </Container>      
                ))
            }
        </div>
    );
}

export default ListEndPoint;
