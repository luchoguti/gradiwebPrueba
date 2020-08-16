import { Card } from 'react-bootstrap';

const SearchVehicleOwn = (props) =>{
    return (
            <Card>
                <Card.Header className={props.style.headerCard}>
                    <p>Name Owner: {props.data.name}</p>
                    <p>Number Identification: {props.data.number_identification}</p>
                </Card.Header>
                <Card.Body className={props.style.bodyCard}>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Vehicle Number License Plate:
                         { props.data.vehicles[0].number_license_plate }
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                        <p>
                            Trade Mark Vehicle -- { props.data.vehicles[0].trade_mark[0].name_mark }
                        </p>
                        <p>
                            Type Vehicle -- { props.data.vehicles[0].type_vehicle[0].name_type_vehicle }
                        </p>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
    )
}
export default SearchVehicleOwn;