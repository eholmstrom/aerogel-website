import React from 'react'
import MediaQuery from 'react-responsive'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Button from './Button'
import TextMobileStepper from './GridListStepper'
import SlideShow from './SlideShow'
import LongText from './LongText'

import '../styles/Blog.css'

const styles = {
  h2: {
    marginBottom: '5px',
  },
  h3: {
    fontWeight: '300',
    marginTop: '5px',
    fontSize: '15px',
  },
  author: {
    fontWeight: '300',
    fontSize: '15px',
    textAlign: 'right',
    margin: '8px auto',
  },
}
const limit = 500

const blogpost1 = {
  title: <h2 style={styles.h2}>Do we even need wetsuits in Sweden?</h2>,
  date: <h3 style={styles.h3}>July 26, 2018</h3>,
  content:
    '34\u2103 outside. Motivating yourself to develop the best insulating wetsuit on the market is not easy when this weather seems to stay forever. But we all know that sooner or later, winter is coming! \n\n Sometimes I just love technology and the way it can change your everyday life. We had a slow start of the week but we started using an app called Trello and I must say it had major effect on our work. As an entrepreneur, I usually suffer from having to many different thoughts on my mind. But Trello let you do smart to do lists and instead of hiring a boss telling me what to do, Trello does the work surprisingly well! \n The issue we faced last week was the difficulty in quantifying how good our material is. Thermal conductivity measurements are not as straight forward as one may think and after trying out different ways of measuring, we realized it would be a time savior to dig down in literature again. One or two days of research and we now have a decent summary of the alternatives out there. Hopefully we can have results in the near future. Too bad the whole country is on vacation though…',
  author: <h3 style={styles.author}>Jakob Mattsson</h3>,
}

const blogpost2 = {
  title: <h2>Reaching out to customers</h2>,
  content: 'Coming soon',
}

// eslint-disable-next-line
class Blog extends React.Component {
  render () {
    return (
      <div
        style={{
          width: '100%',
          margin: '0 auto 0 auto',
          display: 'flex',
        }}
      >
        <MediaQuery minDeviceWidth={769}>
          <div className="sidePicture">
            <img src={require('../assets/newviklogga.png')} alt="logo" width="229" height="130" />
          </div>
        </MediaQuery>
        <div className="blogWrapper">
          <h1>BLOG</h1>
          {blogpost1.title}
          {blogpost1.date}
          <LongText content={blogpost1.content} limit={limit} />
          {blogpost1.author}
          <div className="blog-divider" />
        </div>
      </div>
    )
  }
}

export default Blog
