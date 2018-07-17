import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import team from '../assets/team.jpg'
import research from '../assets/research.jpg'
import surferBoard from '../assets/hoddevik_surfer_board.jpg'

class SlideShow extends React.Component {
  state = {}

  render () {
    return (
      <Carousel autoPlay interval={6000}>
        <div>
          <img src={team} alt="team" />
        </div>
        <div>
          <img src={research} alt="research" />
        </div>
        <div>
          <img src={surferBoard} alt="surfer-with-board" />
        </div>
      </Carousel>
    )
  }
}

/* TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
} */

/*        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper> */

export default SlideShow
