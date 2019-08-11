import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext,
  Image, Paragraph, Markdown, Text, Grid } from 'grommet';
import { FormClose, Notification, DocumentPdf, Mail, Github, Book} from 'grommet-icons';

import profile from './res/img/profile_donut.jpeg';
import cv from './res/cv_190811.pdf';

const theme = {
  global: {
    colors: {
      brand: '#EFEEFE',
      lavender: '#EFEEFE',
      pinklavender: '#F0E2FF',
      darklavender: '#A077CC',
      heavy: '#000000',
    },
    font: {
      family: 'Lato, Helvetica Neue',
      size: '14px',
      height: '20px',
    },
  },
};

const headerStyle = {
  fontSize: '36px',
  color: '#000000',
  fontFamily: 'Permanent Marker',
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    // elevation='small'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const NewsItem = (props) => (
  <Box direction="row" margin={{"bottom": "small"}}>
    <Box width="small">
      <Text size="small" margin={{"right": "small",}}>
        <b>{props.date}</b>
      </Text>
    </Box>
    <Box width="large">
      <Text size="small">
        <Markdown>
          {props.text}
        </Markdown>
      </Text>
    </Box>
  </Box>
);

const PubItem = (props) => (
  <Box direction="row" margin="small">
    <Text color="darklavender" margin={{"right": "small",}}>✦</Text>
    <Box direction="column">
      <Text size="medium">
        <b>{props.title}</b>
      </Text>
      <Text size="small">
        <Markdown>
          {props.authors}
        </Markdown>
      </Text>
      <Text size="small">
        <i>{props.venue}</i>
      </Text>
    </Box>
  </Box>
);

let newsData = {
  "news": [
    {
      "date": "Aug 27 - Sep 1, 2019",
      "text": "Attending the Google WTM Scholars Retreat in Sydney, Australia!",
    },
    {
      "date": "Aug 8, 2019",
      "text": "Presenting my ongoing work on sender-controlled mobile instant message notifications at HCI@KAIST Summer Workshop",
    },
    {
      "date": "Jul 11, 2019",
      "text": "Selected as a scholarship recipient of the 2019 Google Women Techmakers (WTM) Scholars Program"
    },
    {
      "date": "Jul 5, 2019",
      "text": "Our paper _Knocker: Vibroacoustic-based Object Recognition with Smartphones_ " +
      "is accepted at ACM IMWUT (UbiComp) '19."
    }
  ],
};

let paperData = {
  "papers": [
    {
      "title": "Knocker:  Vibroacoustic-based Object Recognition with Smartphones",
      "venue": "ACM IMWUT (UbiComp) 2019",
      "authors": "Taesik Gong, **Hyunsung Cho**, Bowon Lee, and Sung-Ju Lee",
      "paper_link": null,
      "slides": null,
      "award": null,
      "video": null,
      "website": null,
    },
    {
      "title": "Intelligent Positive Computing with Mobile,  Wearable,  and IoT Devices: Literature Review and Research Directions",
      "venue": "Ad Hoc Networks 2019",
      "authors": "Uichin Lee, Kyungsik Han, **Hyunsung Cho**, Kyong-Mee Chung, Hwajung Hong, Sung-Ju Lee, Youngtae Noh,Sooyoung Park,  and John M. Caroll.",
      "paper_link": null,
      "slides": null,
      "award": null,
      "video": null,
      "website": null,
    },


    // {
    //   "title": "",
    //   "venue": "",
    //   "authors": "",
    //   "paper_link": null,
    //   "slides": null,
    //   "award": false,
    //   "video": null,
    //   "website": null,
    // },
  ],
};

let posterData = {
  "posters": [
    {
      "title": "Sender-Controlled Mobile Instant Message Notifications  Using  Activity  Information",
      "venue": "ACM MobiSys '19 Demos",
      "authors": "**Hyunsung Cho**, Jinyoung Oh, Juho Kim, and Sung-Ju Lee",
      "paper_link": null,
      "slides": null,
      "award": null,
      "video": null,
      "website": null,
    },
    {
      "title": "Real-Time Object Identification with a Smartphone Knock",
      "venue": "ACM MobiSys '19 Videos",
      "authors": "Taesik Gong, **Hyunsung Cho**, Bowon Lee, and Sung-Ju Lee",
      "paper_link": null,
      "slides": null,
      "award": "Best Video Award",
      "video": null,
      "website": null,
    },
    {
      "title": "Identifying Everyday Objects with a Smartphone Knock",
      "venue": "ACM CHI '18 Late-Breaking Work",
      "authors": "Taesik Gong, **Hyunsung Cho**, Bowon Lee, and Sung-Ju Lee",
      "paper_link": null,
      "slides": null,
      "award": null,
      "video": null,
      "website": null,
    },
  ],
};

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
            <Box fill="horizontal" align="center" alignContent="center">
              <AppBar>
                <Heading level='3' margin="middle" color='heavy' style={headerStyle}>
                  Hyunsung Cho&nbsp;
                  {/*<i class="fas fa-heart" color='brand'></i>&nbsp;*/}
                  {/*<i class="fas fa-mobile-alt"></i>&nbsp;*/}
                  {/*<i class="far fa-comments"></i>&nbsp;*/}
                  {/*<i class="far fa-user"></i>*/}
                </Heading>
              </AppBar>
              <Box direction="column">
                <Box fill="horizontal" align="center" alignContent="center" pad='large' direction='row' flex overflow={{ horizontal: 'hidden' }}>
                  <Box height="medium" width="medium">
                    <Image
                      fit="contain"
                      margin="medium"
                      src={profile}
                    />
                  </Box>
                  <Box orientation="column">
                    <Paragraph margin="small">
                      I am a masters student in the
                      <Text color="darklavender"> <a href="https://nmsl.kaist.ac.kr" target="_blank"
                                                     style={{"color": "black", "background": "lavender"}}>
                        Networking & Mobile Systems Lab</a> </Text>
                      at KAIST.
                      My research in mobile HCI and ubiquitous computing focuses on designing and
                      building <Text style={{"background-color": "lavender"}}><b>context-aware</b></Text> systems
                      that provide just-in-time, just-in-place digital support for users.
                    </Paragraph>
                    <Box margin="small" direction="row-responsive" gap="medium">
                      <Button plain alignSelf="start" icon={<DocumentPdf />} label="CV" target="_blank" href={cv} />
                      <Button plain alignSelf="start" icon={<Mail />} label="Email" target="_blank" href="mailto:hyunsungcho@kaist.ac.kr" />
                      <Button plain alignSelf="start" icon={<Book />} label="Google Scholars" target="_blank" href="https://scholar.google.co.kr/citations?user=VpQp9hEAAAAJ"/>
                    </Box>
                  </Box>
                </Box>
                <Box fill="horizontal" pad="large" direction="column" background="lavender">
                  <Heading level="3">Latest News & Travels</Heading>
                  { newsData.news.map(news => (
                    <NewsItem date={news.date} text={news.text}/>
                  ))}
                </Box>
                <Box fill="horizontal" pad="large" direction="column" background="white">
                  <Heading level="3">Publications</Heading>
                  <Heading level="4">Conference and Journal Papers</Heading>
                  { paperData.papers.map(paper => (
                    <div>
                      <PubItem title={paper.title} authors={paper.authors} venue={paper.venue}/>
                    </div>
                  ))}
                  <Heading level="4">Posters, Demos, Videos, and Workshop Papers</Heading>
                  { posterData.posters.map(poster => (
                    <div>
                      <PubItem title={poster.title} authors={poster.authors} venue={poster.venue}/>
                    </div>
                  ))}
                  {/*<Heading>Publications</Heading>*/}
                  {/*<Paragraph margin="small">*/}
                  {/*Knocker: Vibroacoustic-based Object Recognition with Smartphones (UbiComp '19)*/}
                  {/*</Paragraph>*/}
                </Box>
                <Box fill="horizontal" pad="large" direction="column" background="lavender" align="center" alignContent="center">
                  Copyright © 2019 Hyunsung Cho
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
