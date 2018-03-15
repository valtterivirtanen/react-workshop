import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    border: 1px solid black;
    padding: 10px
`;

const Image = styled.img`
    max-width: 100%;
    clip: rect(100px,100px,200px,200px);
`;

export default class Card extends React.Component {
    render() {
        return (
            <CardWrapper>
                <h1>{this.props.title}</h1>
                <Image src={this.props.imageUrl}/>
            </CardWrapper>
        )
    }
};