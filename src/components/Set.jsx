import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Set = (props) => {
    return <>
        <Row>
            <Col><Image src={props.imageurl} alt={props.name} fluid></Image></Col>
            <Col>
                <Row><h3>Ride Id: {props.rideid}</h3></Row>
                <Row><h3>Origin Station: {props.origin_station}</h3></Row>
                <Row><h3>Station Path: {props.station_path}</h3></Row>
                <Row><h3>Date: {props.date}</h3></Row>
                <Row><h3>Distance: {props.distance}</h3></Row>
            </Col>
            <Col><h6>{props.city_name}</h6></Col>
            <Col><h6>{props.state_name}</h6></Col>
        </Row>
    </>
}

export default Set