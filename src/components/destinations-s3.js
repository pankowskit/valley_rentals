import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class DestinationsS3 extends Component{
    render(){
        return( 
            <Container fluid className="destinations-s3 bg-dark d-flex minh-25vh align-items-center py-5">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={4} className="text-center p-4">
                        <h3 className="text-white">
                            Lorem ipsum dolor
                        </h3>
                        <p className="text-white initialism">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-center p-4">
                        <h3 className="text-white">
                            Lorem ipsum
                        </h3>
                        <p className="text-white initialism">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-center p-4">
                        <h3 className="text-white">
                            Lorem ipsum
                        </h3>
                        <p className="text-white initialism">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DestinationsS3;