import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import LodgingsS1 from "../components/lodgings-s1";

class Lodgings extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <LodgingsS1/>
            </Container>    
        );
    }
}

export default Lodgings;