import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import PromotionsS1 from "../components/promotions-s1";
import PromotionsS2 from "../components/promotions-s2";
import PromotionsS3 from "../components/promotions-s3";

class Promotions extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <PromotionsS1/>
                <PromotionsS2/>
                <PromotionsS3/>
            </Container>    
        );
    }
}

export default Promotions;
