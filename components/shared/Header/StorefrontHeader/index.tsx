import React from "react";
import styles from './styles.module.css';
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSearch, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../Logo';

const StorefrontHeader: React.FC = () =>{
    return(
        <Row className={styles.backgroud}>
            <Col md={8} className="mt-2">
                <Logo />
            </Col>

            <Col md={4} className="mt-2 text-center">
                <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                        <InputGroup>
                            <FormControl placeholder="Pesquisar produto"/>
                        </InputGroup>
                    </Col>

                    <Col md={6} className="mt-2">
                        <Row>
                            <Col md={4} xs={4}>
                                <FontAwesomeIcon icon={faSearch} color="var(--color-gray-ligth)" />
                            </Col>
                            <Col md={4} xs={4}>
                                <FontAwesomeIcon icon={faShoppingCart} color="var(--color-gray-ligth)" />
                            </Col>
                            <Col md={4} xs={4}>
                                <FontAwesomeIcon icon={faCircle} color="var(--color-gray-ligth)" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default StorefrontHeader;