import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import team from '../assets/team.jpg'
import research from '../assets/research.jpg'
import meeting from '../assets/meeting2.jpg'
import surferBoard from '../assets/hoddevik_surfer_board.jpg'
import surferRun from '../assets/hoddevik_surfer_run.jpg'

class SlideShow extends React.Component {
  state = {}

  render () {
    return (
      <Carousel autoPlay>
        <div>
          <img src={surferRun} alt="meeting" />
        </div>
        <div>
          <img src={surferBoard} alt="meeting" />
        </div>
        <div>
          <img src={team} alt="team" />
        </div>
        <div>
          <img src={research} alt="research" />
        </div>
        <div>
          <img src={meeting} alt="meeting" />
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
