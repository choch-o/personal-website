import {Box} from "grommet";
import React from "react";

const Section = ({children}) => (
    <Box fill="horizontal" pad="large" direction="column" background="white"
         margin={{"top": "small", "bottom": "small"}}
         elevation="xsmall">
        <div>{children}</div>
    </Box>
);

export { Section };