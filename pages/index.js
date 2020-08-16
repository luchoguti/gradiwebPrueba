import Layout from '../components/Layout';
import dataEnpoint from '../dataJson/endPointsRequest.json';
import ListEndPoint from '../components/ListEndPoint';

const Index = () =>{
    return (
        <Layout>
            <ListEndPoint endpoint={dataEnpoint} />
        </Layout>
    )
}

export default Index;