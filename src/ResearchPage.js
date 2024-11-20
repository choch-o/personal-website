import React, { Component } from 'react';
import {Anchor, Box, Button, Heading, Image, Paragraph, ResponsiveContext} from "grommet";
import {newsData} from "./NewsData";
import {NewsItem} from "./NewsItem";
import {paperData, posterData} from "./PubData";
import {PubItem} from "./PubItem";
import {Section} from "./Section";
import {Footer} from "./Footer"
// import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFile, faEnvelope, faVolumeHigh, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faGoogleScholar, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const profile = '/img/profile_xmas.JPG';

library.add(faFile, faEnvelope, faGoogleScholar, faXTwitter, faVolumeHigh, faPlay);

const isLatestNews = (dateStr) => {
    /* Incompatible in Safari */
    // let newsDate = Date.parse(dateStr)
    // let today = Date.now()
    // let year = 31556952000
    // return today - newsDate < year;

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let today = new Date()
    let thisMonth = today.getMonth()
    let thisYear = today.getFullYear()
    let newsDateItems = dateStr.split(" ")
    let newsMonth = newsDateItems[0]
    let newsYear = newsDateItems[1]
    if ((thisYear - 1 > newsYear) ||
        ((months.indexOf(newsMonth) < thisMonth) && (thisYear > newsYear))) {
        return false
    } else {
        return true
    }
}

class ResearchPage extends Component {
    state = {
        showAllNews: false,
        currentProject: null,
    }

    anchorStyle = {
        fontWeight: 'normal',
        'textDecoration': 'underline ',
        'WebkitTextDecoration': 'underline',
        'textDecorationColor': this.props.theme.global.colors.brand,
        'WebkitTextDecorationColor': this.props.theme.global.colors.brand,
    }

    subtleAnchorStyle = {
        fontWeight: 'normal',
    }

    render() {
        return (
            <ResponsiveContext.Consumer>
                {size => (
                    <Box direction="column" flex={true} overflow='auto' align="center" alignContent="center">
                        <Box flex={false}>
                            <Box fill="horizontal" align="center" alignContent="center" pad='large'
                                 direction={(size === "small") ? 'column' : 'row'}
                                 background="white" margin={{"top": "small", "bottom": "small"}} elevation="xsmall">
                                <Box height="360px" width="360px" direction="column" margin="small">
                                    <Image
                                        fit="contain"
                                        // margin="medium"
                                        src={profile}
                                    />
                                    <Box margin="xsmall" direction="column" gap="xsmall">
                                        <Button plain alignSelf="start" icon={<FontAwesomeIcon icon="fa-solid fa-envelope" />} label="hyunsung [at] cs.cmu.edu" target="_blank" href="mailto:hyunsung@cs.cmu.edu" />
                                        <Button plain alignSelf="start" icon={<FontAwesomeIcon icon="fa-brands fa-google-scholar" style={{color: "#74C0FC",}} />} label="Google Scholars" target="_blank" href="https://scholar.google.co.kr/citations?user=VpQp9hEAAAAJ"/>
                                        <Button plain alignSelf="start" icon={<FontAwesomeIcon icon="fa-brands fa-x-twitter" />} label="Twitter | X" target="_blank" href="https://twitter.com/hciresearcher"/>
                                        <Button plain alignSelf="start" icon={<FontAwesomeIcon icon="fa-solid fa-volume-high" />} label="How to pronounce my name" target="_blank" href="https://x.com/hciresearcher/status/1572391049317830656" />
                                    </Box>
                                    {/*<Text size="small">* Hyunsung is pronounced as [hjʌn sʌŋ].</Text>*/}
                                    {/*<Text size="small" alignSelf="center">Hyunsung is pronounced hjʌn sʌŋ.</Text>*/}
                                </Box>

                                <Box orientation="column" width="600px">
                                    <Paragraph margin="small" size="small" fill={true} color="black">
                                        I am a fourth-year Ph.D. student in the <Anchor color='black' href="https://augmented-perception.org"
                                                                                 label="Augmented Perception Lab"
                                                                                 style={this.anchorStyle}
                                    /> at the <Anchor color='black' href="https://www.hcii.cmu.edu" label="Human-Computer Interaction Institute"
                                                      style={this.anchorStyle}/> at <Anchor color='black' href="https://www.cs.cmu.edu"
                                                                                       label="Carnegie Mellon University"
                                                                                       style={this.anchorStyle}
                                    />, advised by Prof. <Anchor color='black' href="https://davidlindlbauer.com"
                                                                 label="David Lindlbauer" style={this.anchorStyle}/>.
                                        I explore ways to enhance users' capabilities with minimal effort and distraction through <b>context-aware digital support</b>.
                                        {/*She is interested in building context-aware computing systems that enable seamless, unobtrusive interactions with digital functionalities.*/}

                                        {/*My research interest lies in Human-Computer Interaction (HCI) and ubiquitous computing.*/}

                                        {/*My current research focuses on context-aware adaptation of user interface in Mixed Reality through computational interaction.*/}
                                        {/*I explore how we can advance users’ capabilities while minimizing distraction through context-aware digital support.*/}
                                        {/*My research interests lie at the intersection of HCI, ubiquitous computing, CSCW, and mobile computing.*/}
                                        {/*I like building novel applications of context-aware computing, which provide just-in-time,*/}
                                        {/*just-in-place digital support for users based on contextual and behavioral information*/}
                                        {/*inferred from mobile sensing and user interaction data.*/}
                                    </Paragraph>
                                    <Paragraph margin="small" size="small" fill={true} color="black">
                                        My current research advances <b>everyday Extended Reality (XR)</b> in two key directions: (1) developing <b>context-aware, personalized XR interfaces</b> that dynamically adapt to users' changing environments, activities, and goals, and (2) designing <b>multimodal</b> interaction techniques that integrate natural inputs such as gaze, voice, and gesture with rich outputs across visual, auditory, and haptic channels.
                                        By combining <b>computational modeling</b> of human perception and behavior, <b>user-centered</b> design, and <b>adaptive</b> systems,  I aim to create XR technologies that blend seamlessly into users' lives, making the technology feel <Anchor color='black' href="https://dl.acm.org/doi/10.1145/329124.329126" label='"invisible"' style={this.subtleAnchorStyle}/>.
                                        This allows users to focus on what matters most in their environment while accessing digital support effortlessly when needed.
                                    </Paragraph>
                                    <Paragraph margin="small" size="small" fill={true} color="black">

                                        In Summer 2023 and 2024, I worked as a Research Scientist Intern at <Anchor color='black' href="https://about.meta.com/realitylabs/"
                                                label="Meta Reality Labs" style={this.subtleAnchorStyle}/>
                                        , Redmond, USA, with Dr. <Anchor color='black' href="https://www.kashyaptodi.com/" label="Kash Todi" style={this.subtleAnchorStyle}/>.
                                        Prior to joining CMU, I was a member
                                        of the <Anchor color="black" href="https://nmsl.kaist.ac.kr"
                                                   label="Networking & Mobile Systems Lab"
                                                   style={this.subtleAnchorStyle}/> at <Anchor color="black" href="https://www.kaist.ac.kr/en/"
                                                                                          label="KAIST" style={this.subtleAnchorStyle}/>, advised by
                                        Prof. <Anchor color="black" href="https://sites.google.com/site/wewantsj/"
                                                      label="Sung-Ju Lee" style={this.subtleAnchorStyle}/> and a research intern
                                        at <Anchor color="black" href="https://www.bell-labs.com" label="Nokia Bell Labs"
                                                   style={this.subtleAnchorStyle}/>, Cambridge, UK, with Dr. <Anchor color="black" href="https://akhilmathurs.github.io/" label="Akhil Mathur" style={this.subtleAnchorStyle}/>.
                                        In past projects, I focused on reducing digital distractions for digital wellbeing through context-aware computing,
                                        and I explored privacy-preserving methods for context-aware systems using federated learning.

                                        {/*I'm also interested in computational approaches to model human behavior and interaction to */}
                                        {/*improve context-awareness of a system.*/}
                                    </Paragraph>

                                </Box>
                            </Box>

                            <Section>
                                <Heading level="3" color="black">Latest News & Travels</Heading>
                                { this.state.showAllNews ?
                                    newsData.news.map(news => {
                                        return <NewsItem size={size} date={news.date} text={news.text}/>
                                    })
                                    :
                                    newsData.news.map(news => {
                                        return isLatestNews(news.date) ?
                                            <NewsItem size={size} date={news.date} text={news.text}/>
                                            : <div></div>
                                    })
                                }
                                <Box align="center">
                                    <Anchor color="focus" style={this.subtleAnchorStyle}
                                            onClick={() => {this.setState({showAllNews: !this.state.showAllNews})}}
                                            label={this.state.showAllNews ? "Show Latest" : "Show All"}
                                    />
                                </Box>
                            </Section>

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

export { ResearchPage };