import React, { Component } from 'react';
import {Box, Button, Layer, Carousel, Grid, Heading, Image, Text, ResponsiveContext, Video} from "grommet";
import {Close} from "grommet-icons";
import {Section} from "./Section";
import {Footer} from "./Footer";
import {projectData} from "./ProjectData";

function getExtension(filename) {
    const parts = filename.split('.');
    return parts[parts.length - 1];
}

function isImage(filename) {
    const ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case 'jpg':
        case 'gif':
        case 'bmp':
        case 'png':
            //etc
            return true;
        default:
            return false;
    }
}

function isVideo(filename) {
    const ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case 'm4v':
        case 'avi':
        case 'mpg':
        case 'mp4':
            // etc
            return true;
        default:
            return false;
    }
}

class DesignProjectsPage extends Component {
    state = {
        currentProject: null,
        currentProjectMedia: []
    }

    Project = (props) => (
        <Box background="light-3"
             onClick={() => this.showProject(props.project)}>
            <Image fit="cover" src={props.project.thumbnail} />
        </Box>
    );

    diyProjects = projectData.diy_projects.map((project) => {
        return <this.Project project={project} />
    })

    // artProjects = projectData.art_projects.map((project) => {
    //     return <this.Project project={project} />
    // })

    showProject = (project) => {
        this.setState(
            {
                currentProject: project,
                currentProjectMedia: project.media.map((media) => {
                    return (isImage(media) ?
                        (<Image fit="cover" src={media}/>)
                        : (isVideo(media) &&
                            <Video controls={false} fit="cover" autoPlay={true} loop={true}>
                                <source key="video" src={media} type="video/mp4"/>
                            </Video>))
            })
        });
    }

    render() {
        return(
            <ResponsiveContext.Consumer>
                {size => (
                    <Box direction="column" flex={true} overflow='auto' align="center" alignContent="center">
                        <Box flex={false}>
                            {/* DIY Design & Fabrication */}
                            <Section alignContnet="center">
                                <Heading level="3" color="black">DIY Design & Fabrication</Heading>
                                <Box width="xlarge">
                                    <Grid
                                        // 3x3 grid
                                        rows="medium"
                                        columns="300px"
                                        gap="small"
                                    >
                                        { this.diyProjects }
                                    </Grid>
                                </Box>
                            </Section>

                            {/* Experimental Capture */}
                            {/*<Section alignContent="center">*/}
                            {/*    <Heading level="3" color="black">Experimental Capture</Heading>*/}
                            {/*    <Box width="xlarge">*/}
                            {/*        <Grid*/}
                            {/*            // 3x3 grid*/}
                            {/*            rows="medium"*/}
                            {/*            columns="400px"*/}
                            {/*            gap="small"*/}
                            {/*        >*/}
                            {/*            { this.artProjects }*/}
                            {/*        </Grid>*/}
                            {/*    </Box>*/}
                            {/*</Section>*/}

                            {(this.state.currentProject != null) && (
                                <Layer
                                    margin="medium"
                                    pad="medium"
                                    onEsc={() => this.setState({currentProject: null})}
                                    onClickOutside={() => this.setState({currentProject: null})}
                                    >
                                    <Box width="fill" pad="medium" overflow="scroll">
                                        <Box height="medium" width="large" alignSelf="center">
                                            <Carousel fill alignSelf="center">
                                                {this.state.currentProjectMedia}
                                            </Carousel>
                                        </Box>
                                        <Heading margin="small" level={3}>{this.state.currentProject.title}</Heading>
                                        <Text margin="small">
                                            {this.state.currentProject.description}
                                        </Text>
                                    </Box>
                                    <Button
                                        icon={<Close size="small"/>}
                                        label={<Text size="medium">Close</Text>}
                                        margin={{
                                            "bottom": "medium",
                                        }}
                                        alignSelf="center"
                                        a11yTitle="code"
                                        onClick={() => this.setState({currentProject: null})} />
                                </Layer>
                            )}
                        </Box>
                        <Footer/>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        )
    }
}

export { DesignProjectsPage };