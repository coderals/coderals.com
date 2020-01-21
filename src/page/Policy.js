import React from 'react';
import { Box } from '@material-ui/core';

export default class Policy extends React.Component {

  render() {
    let textValue1 = "Your privacy is important to us.";
    let textValue2 = "It is Coderals' policy to respect your privacy regarding any information we may collect from you through our apps.";
    let textValue3 = "We only ask for personal information when we truly need it to provide a service to you, but you are always free to refuse our request. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.";
    let textValue4 = "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.";
    let textValue5 = "We don’t share any personally identifying information publicly or with third-parties, except when required to by law.";
    let textValue6 = "Your continued use of our apps and website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.";
    let textValue7 = "This policy is effective as of 31 December 2020.";
    return (
        <Box color="#263238" width={2/5} align="left">
          <Box paddingTop="2%">{textValue1}</Box>
          <Box paddingTop="2%">{textValue2}</Box>
          <Box paddingTop="2%">{textValue3}</Box>
          <Box paddingTop="2%">{textValue4}</Box>
          <Box paddingTop="2%">{textValue5}</Box>
          <Box paddingTop="2%">{textValue6}</Box>
          <Box paddingTop="2%">{textValue7}</Box>
        </Box>
    );
  }
}
