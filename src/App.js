import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Box, Button, Collapsible, Menu, Heading, Grommet, Layer, ResponsiveContext,
  Image, Paragraph, Markdown, Text, Grid, ThemeContext, Anchor } from 'grommet';
import { FormClose, Notification, DocumentPdf, Mail, Github, Book, Home, Video, Trophy, Multimedia, PlayFill, Play, Document} from 'grommet-icons';

import { newsData } from './NewsData';
import { paperData, posterData } from './PubData';
import { projectData } from './ProjectData';

const profile = '/img/profile_xmas.JPG';
const placeholder ='/img/happy_patrick.jpg';
const cv = 'pdf/cv_200311.pdf';

const theme = {
  global: {
    colors: {
      background: '#f8f7f5',
      brand: '#b1ca80',
      active: '#436c00',
      focus: '#436c00',
      bullet: '#436c00',
      highlight: '#b1ca80',

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
    },
    "::selection": '#b1ca80',
  },
};

const headerStyle = {
  fontSize: '36px',
  color: '#000000',
  fontFamily: 'Permanent Marker',
  textAlign: 'center',
  alignSelf: 'center',
};

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
                color="highlight"
                icon={<Trophy size="small"/>}
                label={<Text size="small">{props.award}</Text>}
                a11yTitle={props.award}
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

class App extends Component {
  state = {
    showSidebar: false,
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill={true}>
              <AppBar alignSelf="center" textAlign="center">
                <Heading level='3' color='heavy' style={headerStyle}>
                  Hyunsung Cho
                  {/*<i class="fas fa-heart" color='brand'></i>&nbsp;*/}
                  {/*<i class="fas fa-mobile-alt"></i>&nbsp;*/}
                  {/*<i class="far fa-comments"></i>&nbsp;*/}
                  {/*<i class="far fa-user"></i>*/}
                </Heading>
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
                    <Box height="270px" width="360px">
                      <Image
                        fit="contain"
                        margin="medium"
                        src={profile}
                      />
                    </Box>
                    <Box orientation="column">
                      <Paragraph margin="small">
                        I am a PhD student in the <Anchor color="black"  href="https://nmsl.kaist.ac.kr" primary label="Networking & Mobile Systems Lab" /> at KAIST.
                        My research in mobile HCI and ubiquitous computing focuses on designing and
                        building <Text style={{"background-color": "brand"}}>context-aware</Text> systems
                        that provide just-in-time, just-in-place digital support for users.
                      </Paragraph>
                      <Box margin="small" direction="row-responsive" gap="medium">
                        <Button plain alignSelf="start" icon={<DocumentPdf />} label="CV" target="_blank" href={cv} />
                        <Button plain alignSelf="start" icon={<Mail />} label="Email" target="_blank" href="mailto:hyunsungcho@kaist.ac.kr" />
                        <Button plain alignSelf="start" icon={<Book />} label="Google Scholars" target="_blank" href="https://scholar.google.co.kr/citations?user=VpQp9hEAAAAJ"/>
                      </Box>
                    </Box>
                  </Box>
                  <Box fill="horizontal" pad="large" direction="column" background="white"
                       margin={{"top": "small", "bottom": "small"}}
                       elevation="xsmall" >
                    <Heading level="3">
                             <span style={{"background-color": "wg_lightgreen"}}>Latest News & Travels</span></Heading>
                    { newsData.news.map(news => (
                      <NewsItem size={size} date={news.date} text={news.text}/>
                    ))}
                  </Box>

                  <Box fill="horizontal" pad="large" direction="column" background="white"
                       margin={{"top": "small", "bottom": "small"}}
                       elevation="xsmall">
                    <Heading level="3">Publications</Heading>
                    <Heading level="4">Conference and Journal Papers</Heading>
                    { paperData.papers.map(paper => (
                      <div>
                        <PubItem title={paper.title} authors={paper.authors} venue={paper.venue} award={paper.award}
                                 paper_link={paper.paper_link} website={paper.website} video={paper.video}/>
                      </div>
                    ))}
                    <Heading level="4">Posters, Demos, Videos, and Workshop Papers</Heading>
                    { posterData.posters.map(poster => (
                      <div>
                        <PubItem title={poster.title} authors={poster.authors} venue={poster.venue} award={poster.award}
                                  paper_link={poster.paper_link} website={poster.website} video={poster.video}/>
                      </div>
                    ))}
                  </Box>

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
