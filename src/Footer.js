import {Box} from "grommet";
import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <Box fill="horizontal" pad="large" direction="column" align="center" alignContent="center"
                 margin={{"bottom": "large"}}>
                Copyright © 2019 Hyunsung Cho
            </Box>
        )
    }
}

export {Footer};