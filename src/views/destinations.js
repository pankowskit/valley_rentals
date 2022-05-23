import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import DestinationsS1 from "../components/destinations-s1";
import DestinationsS2 from "../components/destinations-s2";
import DestinationsS3 from "../components/destinations-s3";

class Destinations extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <DestinationsS1/>
                <DestinationsS2/>
                <DestinationsS3/>
            </Container>    
        );
    }
}

export default Destinations;