import React from 'react';
import { Container, Box, Tabs, Tab } from '@material-ui/core';
import Apps from './Apps';
import Policy from './Policy';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Apps",
      pageComponent: {}
    }
  }

  handleChange(event, newValue){
    this.setState({value:newValue});
  }

  render() {
    const pageName = this.state.value;
    let renderPage;
    if (pageName === "Apps") {
      renderPage = <Apps/>;
    }else if (pageName === "Policy") {
      renderPage = <Policy/>;
    }

    return (
      <Box>
        <Box
        color="#eceff1"
        bgcolor="#263238"
        paddingTop="2%">
          <Tabs
          centered
          value={this.state.value}
          onChange={this.handleChange.bind(this)}>
            <Tab label="Coderals" value="Apps"/>
            <Tab label="Privacy Policy" value="Policy"/>
          </Tabs>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          paddingTop="4%">
          {renderPage}
        </Box>
      </Box>
    );
  }
}
