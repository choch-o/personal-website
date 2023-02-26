import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Box, Button, Heading, Grommet, ResponsiveContext} from 'grommet';
import { ResearchPage } from './ResearchPage';
import { DesignProjectsPage } from "./DesignProjectsPage";

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
      family: 'Helvetica',
      size: '14px',
      height: '20px',
      color: 'black',
      // weight: '300'
    },
    "::selection": '#b1ca80',
  }
};

const headerStyle = {
  fontSize: '28px',
  color: '#000000',
  fontFamily: 'Helvetica',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: '2000',
};

const headerStyleMobile = {
  fontSize: '22px',
  color: '#000000',
  fontFamily: 'Helvetica',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: '2000',
};

const subheaderStyle = {
  fontSize: '20px',
  color: 'black',
  fontFamily: 'Helvetica',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: '200',
}

const subheaderStyleMobile = {
  fontSize: '14px',
  color: 'black',
  fontFamily: 'Helvetica',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: '200',
}

const subheaderBarStyle = {
  fontSize: '18px',
  color: 'brand',
  fontFamily: 'Helvetica',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: '200',
}

const subheaderBarStyleMobile = {
  fontSize: '12px',
  color: 'brand',
  fontFamily: 'Helvetica',
  textAlign: 'center',
  alignSelf: 'center',
  fontWeight: '200',
}

const AppBar = (props) => (
  <Box
    tag='header'
    align='center'
    as='header'
    justify='between'
    pad={{ horizontal: 'xlarge' }}
    style={{ zIndex: '1' }}
    flex={false}
    {...props}
  />
);

class App extends Component {
  state = {
    currentTab: "research"
  }

  onClickProject(projectName) {
    // this.setState({currentProject: projectName})
    console.log("project name: " + projectName)
  }

  switchTab(tabName) {
    this.setState({currentTab: tabName})
    console.log("tab switched: " + tabName);
  }


  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill={true}>
              <AppBar direction={(size === "small") ? "column" : "row"}>
                {/*<Box direction={(size === "small") ? "column" : "row"}>*/}
                <Box direction="row"
                     margin={{top: "large", bottom: "small"}}
                     // margin={(size === "small") ? {top: "large", bottom: "small"} : "none"}
                >
                  <Heading level='3' color='heavy'
                           style={(size === "small") ? headerStyleMobile : headerStyle}
                           margin="none"
                           // margin={(size === "small") ? {top: "large", bottom: "small"} : "none"}
                  >
                    HYUNSUNG CHO
                  </Heading>
                  <Heading level='5'
                           style={(size === "small") ? subheaderBarStyleMobile : subheaderBarStyle}
                           color="brand"
                           margin={{vertical: "none", horizontal: "small"}}>
                    |
                    {/*{(size === "small" ) ? "ㅡ" : "|"}*/}
                  </Heading>
                  <Heading level='3' color='heavy'
                           style={(size === "small") ? headerStyleMobile : headerStyle}
                           margin="none"

                           // level='3' color='heavy' style={(size === "small") ? headerStyleMobile : headerStyle}
                           // margin={{vertical: "small"}}
                      >
                    조현성
                  </Heading>
                </Box>
                <Box direction="row" margin={(size === "small") ? {bottom: "small"} : {top: "large", bottom: "small"}}>
                  <Heading level='5' style={(size === "small") ? subheaderStyleMobile : subheaderStyle}
                           onClick={() => this.switchTab("research")}
                           margin="none"
                           >
                    <Button hoverIndicator={{color: "brand", opacity: "strong"}}>
                      {(this.state.currentTab === "research")
                            ? <span style={{'textDecoration': 'underline ',
                            'WebkitTextDecoration': 'underline',
                            'textDecorationColor': theme.global.colors.brand,
                            'WebkitTextDecorationColor': theme.global.colors.brand,}}>Research</span>
                          : <span>Research</span>}
                    </Button>
                  </Heading>
                  <Heading level='5' style={(size === "small") ? subheaderBarStyleMobile : subheaderBarStyle}
                           color="brand" margin="small">
                    |
                  </Heading>
                  <Heading level='5' style={(size === "small") ? subheaderStyleMobile : subheaderStyle}
                           onClick={() => this.switchTab("diy_projects")} margin="none">
                    <Button hoverIndicator={{color: "brand", opacity: "strong"}}>
                      {(this.state.currentTab === "research")
                          ? <span>DIY Projects</span>
                          : <span style={{'textDecoration': 'underline ',
                            'WebkitTextDecoration': 'underline',
                            'textDecorationColor': theme.global.colors.brand,
                            'WebkitTextDecorationColor': theme.global.colors.brand,}}>DIY Projects</span>}
                    </Button>
                  </Heading>
                </Box>
              </AppBar>
              {this.state.currentTab === "research" ?
                  <ResearchPage theme={theme} />
                  : <DesignProjectsPage />
              }
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default hot(App);
