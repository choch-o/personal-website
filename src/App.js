import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext,
  Image, Paragraph, Markdown } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';

import profile from './img/profile_donut.jpeg';

const theme = {
  global: {
    colors: {
      brand: '#DFA9DA',
      lavender: '#E6D9FE',
      heavy: '#000000',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const headerStyle = {
  fontSize: '36px',
  color: '#000000',
  fontFamily: 'Permanent Marker'
}

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
            <Box fill>
              <AppBar>
                <Heading level='3' margin='none' color='heavy' style={headerStyle}>
                  Hyunsung Cho&nbsp;
                  <i class="fas fa-heart" color='brand'></i>&nbsp;
                  <i class="fas fa-mobile-alt"></i>&nbsp;
                  <i class="far fa-comments"></i>&nbsp;
                  <i class="far fa-user"></i>
                </Heading>
                <Button
                  icon={<Notification />}
                  onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                />
              </AppBar>
              <Box direction="column">
                <Box pad='large' direction='row' flex overflow={{ horizontal: 'hidden' }}>
                  {/*{(!showSidebar || size !== 'small') ? (*/}
                    {/*<Collapsible direction="horizontal" open={showSidebar}>*/}
                      {/*<Box*/}
                        {/*flex*/}
                        {/*width='medium'*/}
                        {/*background='light-2'*/}
                        {/*elevation="small"*/}
                        {/*align="center"*/}
                        {/*justify="center"*/}
                      {/*>*/}
                        {/*sidebar*/}
                      {/*</Box>*/}
                    {/*</Collapsible>*/}
                  {/*): (*/}
                    {/*<Layer>*/}
                      {/*<Box*/}
                        {/*background="light-2"*/}
                        {/*tag="header"*/}
                        {/*justify="end"*/}
                        {/*align="center"*/}
                        {/*direction="row"*/}
                      {/*>*/}
                        {/*<Button*/}
                          {/*icon={<FormClose />}*/}
                          {/*onClick={() => this.setState({ showSidebar: false})}*/}
                        {/*/>*/}
                      {/*</Box>*/}
                      {/*<Box*/}
                        {/*fill*/}
                        {/*background="light-2"*/}
                        {/*align="center"*/}
                        {/*justify="center"*/}
                      {/*>*/}
                        {/*sidebar*/}
                      {/*</Box>*/}
                    {/*</Layer>*/}
                  {/*)}*/}
                    <Box height="medium" width="medium">
                      <Image
                        fit="cover"
                        margin="small"
                        src={profile}
                      />
                    </Box>
                    <Paragraph margin="small">
                      I am a masters student of Networking & Mobile Systems Lab at KAIST. I love doing research on
                      mobile and ubiquiotus computing.
                    </Paragraph>
                  </Box>
                {/*<Box pad="large" direction="column" background="lavender">*/}
                  {/*<Heading>Publications</Heading>*/}
                  {/*<Paragraph margin="small">*/}
                    {/*Knocker: Vibroacoustic-based Object Recognition with Smartphones (UbiComp '19)*/}
                  {/*</Paragraph>*/}
                {/*</Box>*/}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default hot(App);
