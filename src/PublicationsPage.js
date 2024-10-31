import React, { Component } from 'react';
import {Box, Button, Layer, Carousel, Grid, Heading, Image, Text, ResponsiveContext, Video} from "grommet";
import {Close} from "grommet-icons";
import {Section} from "./Section";
import {Footer} from "./Footer";
import {projectData} from "./ProjectData";
import {paperData, posterData} from "./PubData";
import {PubItem} from "./PubItem";

class PublicationsPage extends Component {

    render() {
        return(
            <ResponsiveContext.Consumer>
                {size => (
                    <Box direction="column" flex={true} overflow='auto' align="center" alignContent="center">
                        <Box flex={false}>
                            <Section>
                                <Heading level="3" color="black">Publications</Heading>
                                <Heading level="4">Conference and Journal Papers</Heading>
                                { paperData.papers.map(paper => (
                                  <div>
                                      <PubItem title={paper.title} authors={paper.authors} venue={paper.venue} award={paper.award}
                                               award2={paper.award2} pdf={paper.pdf}
                                               paper_link={paper.paper_link} website={paper.website} video={paper.video}
                                               slides={paper.slides} code={paper.code} poster={paper.poster}
                                               size={size} thumbnail={paper.thumbnail}/>
                                  </div>
                                ))}
                                <Heading level="4">Posters, Demos, Videos, and Workshop Papers</Heading>
                                { posterData.posters.map(poster => (
                                  <div>
                                      <PubItem title={poster.title} authors={poster.authors} venue={poster.venue} award={poster.award}
                                               paper_link={poster.paper_link} pdf={poster.pdf} poster={poster.poster}
                                               website={poster.website} video={poster.video} slides={poster.slides}
                                               code={poster.code}
                                               size={size}
                                      />
                                  </div>
                                ))}
                            </Section>
                        </Box>
                        <Footer/>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        )
    }
}

export { PublicationsPage };