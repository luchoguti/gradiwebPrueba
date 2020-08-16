import Layout from '../components/Layout';
import { Form,Row,Col,Button } from 'react-bootstrap';
import dataVehicle from '../dataJson/dataVehicle.json'
import { useState } from 'react';
import { methodRequet,reStartDataInit } from '../utils';
import Router from 'next/router';

const vehicle = (props) =>{
    const [vehiclePost, setContact] = useState(
        dataVehicle.data
    );
    const errorValidate = (dataForm)=>{
        let formIsValid = true;
        const currentState = Object.values(dataForm);
        for (let index = 0; index < currentState.length; index++) {
            if (currentState[index]['value'] == "") {
                formIsValid = false;
            }
        }
        return formIsValid;
    }
    const formateSend = (jsonSend)=>{
        return {
            "number_license_plate":jsonSend[0]['value'],
            "trademark":jsonSend[1]['value'],
            "type":jsonSend[2]['value'],
            "owner_name":jsonSend[3]['value'],
            "owner_number_ident": jsonSend[4]['value']
        }

    }
    const createVehicle = async () =>{
        let validate = errorValidate(data);
        if(validate){
            let methodRequetName = 'POST';
            let dataSend = formateSend(data);
            let dataRespUser = await methodRequet(dataSend,props.query.url,methodRequetName,'');
            if(dataRespUser){
                alert('Vehicle was created succesfull!');
                reStartDataInit(dataVehicle);
                Router.push('/');
            }
        }else{
            alert('All fields area required...');
        }
    }
    // Input field onChange handler
    const tagOnChange = (id,e) => {
        const { data, errors } = { ...dataVehicle };
        const currentState = data;
        const { name, value } = e.target;
        currentState[id]["value"] = value;
        setContact({ data:currentState , errors: errors });
    }
    const { data } = { ...dataVehicle };
    return (
        <Layout>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Number License Plate</Form.Label>
                        <Form.Control 
                            placeholder="number license plate" 
                            onChange={()=>tagOnChange(data[0].id,event)}
                            name={data[0].name}
                            value={data[0].value}
                        />
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Trademark Vehicle</Form.Label>
                            <Form.Control 
                             as="select"
                             defaultValue="Choose..."
                             onChange={()=>tagOnChange(data[1].id,event)}
                             name={data[1].name}
                            >
                                <option>Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Type Vehicle</Form.Label>
                            <Form.Control 
                                as="select" 
                                defaultValue="Choose..."
                                onChange={()=>tagOnChange(data[2].id,event)}
                                name={data[2].name}
                            >
                                <option>Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control
                            onChange={()=>tagOnChange(data[3].id,event)}
                            name={data[3].name}
                            value={data[3].value}
                            placeholder="owner name" />
                    </Col>
                    <Col>
                        <Form.Label>Owner Number Ident</Form.Label>
                        <Form.Control 
                            placeholder="owner number ident"
                            onChange={()=>tagOnChange(data[4].id,event)}
                            name={data[4].name}
                            value={data[4].value}
                            type="number"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={createVehicle} variant="outline-primary" size="lg" block>Send Post</Button>
                    </Col>
                </Row>
            </Form>
        </Layout>
    )
}
vehicle.getInitialProps = async (ctx) => {
    return {
        query:ctx.query
    }   
}
export default vehicle;