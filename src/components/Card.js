import React from "react";
import styled from "styled-components";



const CardWrapper = styled.div`
    border: 1px solid black;
    padding: 10px;
    visibility: ${props => props.isVisible ? 'visible':'hidden'};
`;

const CardHeader = styled.h1`
    margin: 10% 0;
    text-decoration: underline;
`;

const Image = styled.img`
    max-width: 100%;
`;

export default class Card extends React.Component {
    render() {
        return (
            <CardWrapper isVisible={this.props.cardVisibility}>
                <CardHeader>{this.props.title}</CardHeader>
                <Image src={this.props.imageUrl}/>
            </CardWrapper>
        )
    }
};