import React, { Component } from 'react';
import {Anchor, Box, Button, Heading, Image, Paragraph, ResponsiveContext} from "grommet";
import {Book, DocumentPdf, Mail, Twitter} from "grommet-icons";
import {newsData} from "./NewsData";
import {NewsItem} from "./NewsItem";
import {paperData, posterData} from "./PubData";
import {PubItem} from "./PubItem";
import {Section} from "./Section";
import {Footer} from "./Footer"

const profile = '/img/profile_xmas.JPG';
const placeholder ='/img/happy_patrick.jpg';
const cv = '/pdf/CV_HyunsungCho.pdf';

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
                                <Box height="270px" width="360px" direction="column" margin="small">
                                    <Image
                                        fit="contain"
                                        // margin="medium"
                                        src={profile}
                                    />
                                    {/*<Text size="small">* Hyunsung is pronounced as [hjʌn sʌŋ].</Text>*/}
                                    {/*<Text size="small" alignSelf="center">Hyunsung is pronounced hjʌn sʌŋ.</Text>*/}
                                </Box>
                                <Box orientation="column" width="600px">
                                    <Paragraph margin="small" size="small" fill={true} color="black">
                                        I'm a third-year Ph.D. student in <Anchor color='black' href="https://augmented-perception.org"
                                                                                 label="Augmented Perception Lab"
                                                                                 style={this.anchorStyle}
                                    /> at the <Anchor color='black' href="https://www.hcii.cmu.edu"
                                                      label="Human-Computer Interaction Institute"
                                                      style={this.anchorStyle}/> at <Anchor color='black' href="https://www.cs.cmu.edu"
                                                                                       label="Carnegie Mellon University"
                                                                                       style={this.anchorStyle}
                                    />, advised by Prof. <Anchor color='black' href="https://davidlindlbauer.com"
                                                                 label="David Lindlbauer" style={this.anchorStyle}/>.
                                        My research interest lies in Human-Computer Interaction (HCI) and ubiquitous computing.
                                        I explore how we can advance users’ capabilities while minimizing distraction through context-aware digital support.
                                        My current research focuses on context-aware adaptation of user interface in Mixed Reality through computational interaction.
                                        I worked as a Research Scientist Intern at Meta Reality Labs, Redmond, USA in Summer 2023 with Dr. <Anchor color='black' href="https://www.kashyaptodi.com/"
                                                label="Kash Todi" style={this.anchorStyle}/>.
                                        {/*My research interests lie at the intersection of HCI, ubiquitous computing, CSCW, and mobile computing.*/}
                                        {/*I like building novel applications of context-aware computing, which provide just-in-time,*/}
                                        {/*just-in-place digital support for users based on contextual and behavioral information*/}
                                        {/*inferred from mobile sensing and user interaction data.*/}
                                    </Paragraph>
                                    <Paragraph margin="small" size="small" fill={true} color="black">

                                        Prior to joining CMU, I was a member
                                        of <Anchor color="black" href="https://nmsl.kaist.ac.kr"
                                                   label="Networking & Mobile Systems Lab"
                                                   style={this.subtleAnchorStyle}/> at <Anchor color="black" href="https://www.kaist.ac.kr/en/"
                                                                                          label="KAIST" style={this.subtleAnchorStyle}/> advised by
                                        Prof. <Anchor color="black" href="https://sites.google.com/site/wewantsj/"
                                                      label="Sung-Ju Lee" style={this.subtleAnchorStyle}/> and a research intern
                                        at <Anchor color="black" href="https://www.bell-labs.com" label="Nokia Bell Labs"
                                                   style={this.subtleAnchorStyle}/>, Cambridge, UK.
                                        In past projects, I studied context-aware computing to reduce digital distractions for digital wellbeing;
                                        and user-centered federated learning approach for privacy-preserving ubiquitous computing.

                                        {/*I'm also interested in computational approaches to model human behavior and interaction to */}
                                        {/*improve context-awareness of a system.*/}
                                    </Paragraph>
                                    <Box margin="medium" direction="row-responsive" gap="medium">
                                        <Button plain alignSelf="start" icon={<DocumentPdf />} label="CV" target="_blank" href={cv} />
                                        <Button plain alignSelf="start" icon={<Mail />} label="Email" target="_blank" href="mailto:hyunsung@cs.cmu.edu" />
                                        <Button plain alignSelf="start" icon={<Book />} label="Google Scholars" target="_blank" href="https://scholar.google.co.kr/citations?user=VpQp9hEAAAAJ"/>
                                        <Button plain alignSelf="start" icon={<Twitter />} label="Twitter" target="_blank" href="https://twitter.com/hciresearcher"/>
                                    </Box>
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
                                                 slides={paper.slides} code={paper.code}
                                                 size={size} thumbnail={paper.thumbnail}/>
                                    </div>
                                ))}
                                <Heading level="4">Posters, Demos, Videos, and Workshop Papers</Heading>
                                { posterData.posters.map(poster => (
                                    <div>
                                        <PubItem title={poster.title} authors={poster.authors} venue={poster.venue} award={poster.award}
                                                 paper_link={poster.paper_link} pdf={poster.pdf}
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