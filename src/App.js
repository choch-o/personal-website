import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Box, Button, Collapsible, Menu, Heading, Grommet, Layer, ResponsiveContext,
  Image, Paragraph, Markdown, Text, Grid, ThemeContext, Anchor } from 'grommet';
import { FormClose, Notification, DocumentPdf, Mail, Github, Book, Home, Video, Trophy, Twitter, Multimedia,
  PlayFill, Play, Document, Star} from 'grommet-icons';

import { newsData } from './NewsData';
import { paperData, posterData } from './PubData';

const profile = '/img/profile_xmas.JPG';
const placeholder ='/img/happy_patrick.jpg';
const cv = '/pdf/CV_HyunsungCho.pdf';

const theme = {
  global: {
    colors: {
      background: '#f8f7f5',
      brand: '#b1ca80',
      active: '#436c00',
      focus: '#436c00',
      bullet: '#436c00',
      highlight: '#b1ca80',
      award: '#EBCA23',
      recognition: '#B4DB75',

      // lavender theme
      lavender: '#EFEEFE',
      pinklavender: '#F0E2FF',
      darklavender: '#A077CC',
      heavy: '#000000',

      // white and green theme
      wg_darkgreen: '#002500',
      wg_mediumgreen: '#436c00',
      wg_lightgreen: '#b1ca80',
      wg_white: '#f8f7f5',
      wg_lightgrey: '#bab9b6'

    },
    font: {
      family: 'Lato, Helvetica Neue',
      size: '14px',
      height: '20px',
      color: 'black',
      // weight: '300'
    },
    "::selection": '#b1ca80',
  }
};

const headerStyle = {
  fontSize: '36px',
  color: '#000000',
  fontFamily: 'Helvetica Neue',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: '200'
};

const anchorStyle = {
  fontWeight: 'normal',
  'text-decoration': 'underline ',
  '-webkit-text-decoration': 'underline',
  'text-decoration-color': theme.global.colors.brand,
  '-webkit-text-decoration-color': theme.global.colors.brand,
}

const subtleAnchorStyle = {
  fontWeight: 'normal',
}

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
      size: "12px"
    }

  }};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    as='header'
    justify='between'
    pad={{ horizontal: 'large' }}
    // elevation='small'
    style={{ zIndex: '1' }}
    flex={false}
    {...props}
  />
);

const Section = ({children}) => (
    <Box fill="horizontal" pad="large" direction="column" background="white"
         margin={{"top": "small", "bottom": "small"}}
         elevation="xsmall">
      <div>{children}</div>
    </Box>
);

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

const PubItem = (props) => (
  <Box direction="row" margin="small">
    <Text color="bullet" margin={{"right": "small",}}>✦</Text>
    <Box direction="column">
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
          {props.award != null &&
            <div>
              <Button
                primary="true"
                color="award"
                icon={<Trophy size="small"/>}
                label={<Text size="small">{props.award}</Text>}
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
                label={<Text size="small">{props.award2}</Text>}
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
);

const ProjectItem = (props) => (
  <Box margin="small" pad="medium" background="background" elevation="xsmall" orientation="column">
    <Box height="small" width="fill">
      <Image
        fit="contain"
        src={placeholder}
      />
    </Box>
    <Heading level="2">{props.title}</Heading>
    <Text>Project description</Text>
    <Box
      margin={{"top": "small"}}
      direction="row"
    >
      <ThemeContext.Extend value={badgeTheme}>
        {props.paper_link != null &&
          <div>
            <Button
              theme={badgeTheme}
              icon={<Document size="small"/>}
              label={<Text size="small">Paper</Text>}
              href={props.paper_link}
              a11yTitle="paper"
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
        {props.award != null &&
          <div>
            <Button
              primary="true"
              color="accent-1"
              icon={<Trophy size="small"/>}
              label={<Text size="small">{props.award}</Text>}
              a11yTitle={props.award}
              margin={{
                "top": "xsmall",
                "right": "xsmall",}}
            />
          </div>
        }
        {props.demo != null &&
          <div>
            <Button
              theme={badgeTheme}
              icon={<Multimedia size="small"/>}
              label={<Text size="small">Demo</Text>}
              href={props.demo}
              a11yTitle="demo"
              margin={{
                "top": "xsmall",
                "right": "xsmall",}}
            />
          </div>
        }
      </ThemeContext.Extend>
    </Box>
  </Box>
);

function isLatestNews(dateStr) {
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

class App extends Component {
  state = {
    showSidebar: false,
    showAllNews: false,
  }

  render() {
    const { showSidebar, showAllNews } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill={true}>
              <AppBar alignSelf="center" textAlign="center" direction="column">
                <Heading level='3' color='heavy' style={headerStyle}>
                  HYUNSUNG CHO
                  {/*<i class="fas fa-heart" color='brand'></i>&nbsp;*/}
                  {/*<i class="fas fa-mobile-alt"></i>&nbsp;*/}
                  {/*<i class="far fa-comments"></i>&nbsp;*/}
                  {/*<i class="far fa-user"></i>*/}
                </Heading>
                {/*<Heading level='5' style={{"fontWeight": "400"}} color={'active'} margin="xsmall">*/}
                {/*  hjʌn sʌŋ ʧoʊ*/}
                {/*</Heading>*/}
                {/*{size === "small" ?*/}
                {/*  <Menu*/}
                {/*    dropAlign={{ top: 'top', right: 'right' }}*/}
                {/*  />*/}
                {/*  :*/}
                {/*  <Box>*/}

                {/*  </Box>*/}
                {/*}*/}

              </AppBar>
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
                        I'm a first-year PhD Student in <Anchor color='black' href="https://augmented-perception.org"
                                label="Augmented Perception Lab"
                                style={anchorStyle}
                        /> at the <Anchor color='black' href="https://www.hcii.cmu.edu"
                                label="Human-Computer Interaction Institute"
                                style={anchorStyle}/> at <Anchor color='black' href="https://www.cs.cmu.edu"
                                label="Carnegie Mellon University"
                                style={anchorStyle}
                        />, advised by Prof. <Anchor color='black' href="https://davidlindlbauer.com"
                                                     label="David Lindlbauer" style={anchorStyle}/>.
                        My current research interest is in context-aware adaptation of user interface in mixed reality
                        based on human perception.
                        {/*My research interests lie at the intersection of HCI, ubiquitous computing, CSCW, and mobile computing.*/}
                        {/*I like building novel applications of context-aware computing, which provide just-in-time,*/}
                        {/*just-in-place digital support for users based on contextual and behavioral information*/}
                        {/*inferred from mobile sensing and user interaction data.*/}
                      </Paragraph>
                      <Paragraph margin="small" size="small" fill={true} color="black">

                        I earned my B.S. and M.S. degrees in Computer Science at KAIST in 2018 and 2020.
                        Prior to CMU, I was a member
                        of <Anchor color="black" href="https://nmsl.kaist.ac.kr"
                                   label="Networking & Mobile Systems Lab"
                                   style={subtleAnchorStyle}/> at <Anchor color="black" href="https://www.kaist.ac.kr/en/"
                                                                    label="KAIST" style={subtleAnchorStyle}/> advised by
                        Prof. <Anchor color="black" href="https://sites.google.com/site/wewantsj/"
                                      label="Sung-Ju Lee" style={subtleAnchorStyle}/>.
                        At KAIST, I worked on projects that aim to reduce digital distractions
                        and to promote people's health and wellbeing through context-aware computing.

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
                      <Anchor color="focus" style={subtleAnchorStyle}
                              onClick={() => {this.setState({showAllNews: !showAllNews})}}
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
                                 paper_link={paper.paper_link} website={paper.website} video={paper.video}/>
                      </div>
                    ))}
                    <Heading level="4">Posters, Demos, Videos, and Workshop Papers</Heading>
                    { posterData.posters.map(poster => (
                      <div>
                        <PubItem title={poster.title} authors={poster.authors} venue={poster.venue} award={poster.award}
                                 paper_link={poster.paper_link} pdf={poster.pdf}
                                 website={poster.website} video={poster.video}/>
                      </div>
                    ))}
                  </Section>

                  {/*<Box fill="horizontal" pad="large" direction="column" background="lavender">*/}
                    {/*<Heading level="3">Project Gallery</Heading>*/}
                    {/*<Grid*/}
                      {/*columns={ size === "small" ? "full" : ["1/2", "1/2"]}*/}
                      {/*gap="small"*/}
                      {/*>*/}
                      {/*{ projectData.projects.map(project => (*/}
                        {/*<ProjectItem title={project.title} award={project.award} paper_link={project.paper_link}*/}
                                     {/*website={project.website} demo={project.demo}*/}
                        {/*/>*/}
                      {/*))}*/}
                    {/*</Grid>*/}
                  {/*</Box>*/}

                  <Box fill="horizontal" pad="large" direction="column" align="center" alignContent="center">
                    Copyright © 2019 Hyunsung Cho
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default hot(App);
