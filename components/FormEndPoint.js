import { Col,Form } from 'react-bootstrap';

const FormEndPoint = (props) =>{
    if(props.parameters > 0){
        for (let index = 0; index < props.parameters; index++) {
            return (
                <Col sm={3} key={props.id}>
                    <Form.Control
                        onChange={()=>props.change(props.id,event)}
                        name={props.name}
                        value={props.value}
                        id="inlineFormInputName" 
                        placeholder="Data Filter" />
                </Col>
            )
        }
    }else{
        return (
            <h6 className={props.style.text_h6}>Without parameters</h6>
        )
    }
}

export default FormEndPoint;