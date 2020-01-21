import React from 'react';
import scrumate from './../image/scrumate.png';
import keyholder from './../image/keyholder.png';
import { Apple, Shop, GitHub } from '@material-ui/icons';
import { Box, Card, CardMedia, IconButton } from '@material-ui/core';

export default class Apps extends React.Component {

  render() {
    return (
      <Box color="#263238" width={2/5}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box width={2/5}>
            <Card>
              <CardMedia
                component="img"
                image={scrumate}
              />
              <IconButton aria-label="appStore">
                <Apple/>
              </IconButton>
              <IconButton aria-label="googlePlay">
                <Shop/>
              </IconButton>
              <IconButton aria-label="gitHub">
                <GitHub/>
              </IconButton>
            </Card>
          </Box>
          <Box width={2/5}>
            <Card>
              <CardMedia
                component="img"
                image={keyholder}
              />
              <IconButton aria-label="appStore">
                <Apple/>
              </IconButton>
              <IconButton aria-label="googlePlay">
                <Shop/>
              </IconButton>
              <IconButton aria-label="gitHub">
                <GitHub/>
              </IconButton>
            </Card>
          </Box>
        </Box>
          <Box paddingTop="5%" display="flex" flexDirection="row" justifyContent="space-between">
            <Box width={2/5}>
              <Card>
                <CardMedia
                  component="img"
                  image={scrumate}
                />
                <IconButton aria-label="appStore">
                  <Apple/>
                </IconButton>
                <IconButton aria-label="googlePlay">
                  <Shop/>
                </IconButton>
                <IconButton aria-label="gitHub">
                  <GitHub/>
                </IconButton>
              </Card>
            </Box>
            <Box width={2/5}>
              <Card>
                <CardMedia
                  component="img"
                  image={keyholder}
                />
                <IconButton aria-label="appStore">
                  <Apple/>
                </IconButton>
                <IconButton aria-label="googlePlay">
                  <Shop/>
                </IconButton>
                <IconButton aria-label="gitHub">
                  <GitHub/>
                </IconButton>
              </Card>
            </Box>
          </Box>
      </Box>
    );
  }
}
