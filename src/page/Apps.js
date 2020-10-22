import React from 'react';
import scrumate from './../image/scrumate.png';
import keyholder from './../image/keyholder.png';
import recycleearth from './../image/recycleearth.png';
import restrospective from './../image/restrospective.png';
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
              <IconButton aria-label="appStore" href="https://apps.apple.com/tr/app/scrumate/id1495587600">
                <Apple/>
              </IconButton>
              <IconButton aria-label="googlePlay" href="https://play.google.com/store/apps/details?id=com.codecave.tech.scrumate&gl=TR">
                <Shop/>
              </IconButton>
              <IconButton aria-label="gitHub" href="https://github.com/Erkanerkisi/scrumate">
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
              <IconButton aria-label="appStore" href="https://apps.apple.com/gb/app/key-holder/id1501233031?l=tr">
                <Apple/>
              </IconButton>
              <IconButton aria-label="googlePlay" href="https://play.google.com/store/apps/details?id=com.coderals.keyholder&gl=TR">
                <Shop/>
              </IconButton>
              <IconButton aria-label="gitHub" href="https://github.com/coderals/keyholder/">
                <GitHub/>
              </IconButton>
            </Card>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" paddingTop="5%">
          <Box width={2/5}>
            <Card>
              <CardMedia
                  component="img"
                  image={restrospective}
              />
              <IconButton aria-label="appStore" href="https://apps.apple.com/tr/app/retrospectiveapp/id1536191939?l=tr">
                <Apple/>
              </IconButton>
              <IconButton aria-label="googlePlay" href="https://play.google.com/store/apps/details?id=com.coderals.retrospective&gl=TR">
                <Shop/>
              </IconButton>
              <IconButton aria-label="gitHub" href="https://github.com/Erkanerkisi/retrospective/">
                <GitHub/>
              </IconButton>
            </Card>
          </Box>
          <Box width={2/5}>
            <Card>
              <CardMedia
                  component="img"
                  image={recycleearth}
              />
              <IconButton aria-label="appStore">
                <Apple/>
              </IconButton>
              <IconButton aria-label="googlePlay" href="https://play.google.com/store/apps/details?id=com.coderals.recycleearth&gl=TR">
                <Shop/>
              </IconButton>
              <IconButton aria-label="gitHub" href="https://github.com/Erkanerkisi/Recycle-Earth">
                <GitHub/>
              </IconButton>
            </Card>
          </Box>
        </Box>
      </Box>
    );
  }
}
