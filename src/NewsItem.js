import {Box, Markdown, Text} from "grommet";
import React from "react";

const NewsItem = (props) => (
    <Box direction="row" margin={{"bottom": "small"}}>
        <Box width="xsmall" margin={{"right": "small"}}>
            <Text size={(props.size === "small") ? "small" : "medium"} >
                <b>{props.date}</b>
            </Text>
        </Box>
        <Box width="large" margin={{"left": "small",}}>
            <Text size={(props.size === "small") ? "small" : "medium"} >
                <Markdown>
                    {props.text}
                </Markdown>
            </Text>
        </Box>
    </Box>
);

export { NewsItem };