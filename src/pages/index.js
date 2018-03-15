import React from "react";
import styled from "styled-components";

import Card from '../components/Card.js'
import Button from "../components/Button.js";

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            cardVisible: true
        }
    }

    handleClick = (event) => {
        console.log(this.state);
        this.setState((prevState) => ({
            cardVisible: !prevState.cardVisible
        }));
    }

    render() {
        return (
            <div>
               <Card cardVisibility={this.state.cardVisible} title='My card title' imageUrl='http://az831865.vo.msecnd.net/images/video/bc_intro_video_still.jpg?v=w2CvG_IIZtV4ebJnwRqUTiBgXM0ccTF4JJHDeWSUs1c'/>
               <Button onClick={this.handleClick}>Click to hide card </Button>
            </div>
        )
    }
}