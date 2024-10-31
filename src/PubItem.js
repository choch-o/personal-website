import {Box, Button, Image, Markdown, Text, ThemeContext} from "grommet";
import {Code, Desktop, DocumentPdf, Home, Notes, Star, Trophy, Video} from "grommet-icons";
import React from "react";

/* Styles */
const pubTitleStyle = {
    textDecoration: 'none',
    color: '#000000',
};

const badgeTheme = {
    global: {
        edgeSize: {
            small: "5px"
        }
    },
    button: {
        border: {
            radius: "18px",
        },
        padding: {
            horizontal: "10px",
            vertical: "2px",
        }
    },
    text: {
        medium: {
            size: "12px",
        }
    }};

/* Layout */
const PubItem = (props) => (
    <Box direction={(props.size === "small") ? "column" : "row"} margin="small" responsive="false">
        {props.thumbnail != null &&
        <Box margin={(props.size === "small") ? {"top": "large", "bottom": "small"} : "small"}
             width={(props.size === "small") ? "medium": "small"}
             alignSelf="center"
             responsive="false"
        >
            <Image fit="contain" src={props.thumbnail} />
        </Box>}
        <Box direction="row" width="large">
            <Text color="bullet" margin={{"top": "small", "right": "small",}}>✦</Text>
            <Box direction="column" margin={{"top": "small"}}>
                <Text size="medium">
                    <b>
                        {props.paper_link == null ?
                            props.title :
                            <Button href={props.paper_link} plain="true" hoverIndicator={{color: "brand", opacity: "strong",}}
                                    style={pubTitleStyle}>
                                {props.title}
                            </Button>
                        }
                    </b>
                </Text>
                <Text size="small">
                    <Markdown>
                        {props.authors}
                    </Markdown>
                </Text>
                <Text size="small">
                    <i>{props.venue}</i>
                </Text>
                <Box direction={(props.size === "small" || "medium") ? "column" : "row"}>
                    <Box
                        direction="row"
                    >
                        <ThemeContext.Extend value={badgeTheme}>
                            {props.pdf != null &&
                            <div>
                                <Button
                                    theme={badgeTheme}
                                    icon={<DocumentPdf size="small"/>}
                                    label={<Text size="small">PDF</Text>}
                                    href={props.pdf}
                                    a11yTitle="PDF"
                                    margin={{
                                        "top": "xsmall",
                                        "right": "xsmall",}}
                                />
                            </div>
                            }
                            {props.website != null &&
                            <div>
                                <Button
                                    theme={badgeTheme}
                                    icon={<Home size="small"/>}
                                    label={<Text size="small">Website</Text>}
                                    href={props.website}
                                    a11yTitle="website"
                                    margin={{
                                        "top": "xsmall",
                                        "right": "xsmall",}}
                                />
                            </div>
                            }
                            {props.video != null &&
                            <div>
                                <Button
                                    icon={<Video size="small"/>}
                                    label={<Text size="small">Video</Text>}
                                    href={props.video}
                                    a11yTitle="video"
                                    margin={{
                                        "top": "xsmall",
                                        "right": "xsmall",}}
                                />
                            </div>
                            }
                            {props.code != null &&
                            <div>
                                <Button
                                    icon={<Code size="small"/>}
                                    label={<Text size="small">Code</Text>}
                                    href={props.code}
                                    a11yTitle="code"
                                    margin={{
                                        "top": "xsmall",
                                        "right": "xsmall",}}
                                />
                            </div>}
                            {props.slides != null &&
                            <div>
                                <Button
                                    icon={<Desktop size="small"/>}
                                    label={<Text size="small">Presentation</Text>}
                                    href={props.slides}
                                    a11yTitle="slides"
                                    margin={{
                                        "top": "xsmall",
                                        "right": "xsmall",}}
                                />
                            </div>
                            }
                            {props.poster != null &&
                            <div>
                                <Button
                                  icon={<Notes size="small"/>}
                                  label={<Text size="small">Poster</Text>}
                                  href={props.poster}
                                  a11yTitle="PDF"
                                  margin={{
                                      "top": "xsmall",
                                      "right": "xsmall",}}
                                />
                            </div>
                            }
                        </ThemeContext.Extend>
                    </Box>
                    <Box
                        direction={(props.size === "small") ? "column" : "row"}
                    >
                        <ThemeContext.Extend value={badgeTheme}>
                            {props.award != null &&
                            <div>
                                <Button
                                    primary="true"
                                    color="award"
                                    icon={<Trophy size="small"/>}
                                    label={<Text size="small" weight="bold">{props.award}</Text>}
                                    a11yTitle={props.award}
                                    margin={{
                                        "top": "xsmall",
                                        "right": "xsmall",}}
                                />
                            </div>
                            }
                            {props.award2 != null &&
                            <div>
                                <Button
                                    primary="true"
                                    color="recognition"
                                    icon={<Star size="small"/>}
                                    label={<Text size="small" weight="bold">{props.award2}</Text>}
                                    a11yTitle={props.award2}
                                    margin={{
                                        "top": "xsmall",
                                        "right": "xsmall",}}
                                />
                            </div>
                            }
                        </ThemeContext.Extend>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
);

export { PubItem };