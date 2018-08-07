import React from 'react'
import MediaQuery from 'react-responsive'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Button from './Button'
import TextMobileStepper from './GridListStepper'
import SlideShow from './SlideShow'
import LongText from './LongText'

import '../styles/Blog.css'

const titleColor = '#3a5b6c'

const styleSlideShow = {
  display: 'flex',
  marginTop: '30px',
  justifyContent: 'center',
}

const step1 = {
  title: <h2 style={{ color: titleColor }}>CREATING A PROTOTYPE</h2>,
  content: (
    <div>
      <p>
        The first step in the work process is to create a prototype.<br />
        <br />
        This is an important step, determining if the product is easy to work with and if production
        is scaleable.
      </p>
    </div>
  ),
}

const step2 = {
  title: <h2 style={{ color: titleColor }}>MEASUREMENTS</h2>,
  content: (
    <div>
      <p>
        Theoretically our material should add performance to the water sport user. To assure you
        about the quality of our product we need to do measurements regarding insulation, elasticity
        and durability. These measurements will give us quantitive information about our product's
        performance compared to current wetsuits.
      </p>
    </div>
  ),
}

const step3 = {
  title: <h2 style={{ color: titleColor }}>LAUNCHING OUR WETSUIT</h2>,
  content: (
    <div>
      <p>
        When the optimal structure has been determined together with functioning material
        performance we can begin the launch of our wetsuit.
      </p>
    </div>
  ),
}
const limit = 500

const blogpost1 = {
  title: <h2>Do we even need wetsuits in Sweden?</h2>,
  content:
    '34 degrees centigrade outside. Motivating yourself to develop the best insulating wetsuit on the market is not easy when this weather seems to stay forever. But we all know that sooner or later, winter is coming! \n Sometimes I just love technology and the way it can change your everyday life. We had a slow start of the week but we started using an app called Trello and I must say it had major effect on our work. As an entrepreneur, I usually suffer from having to many different thoughts on my mind. But Trello let you do smart to do lists and instead of hiring a boss telling me what to do, Trello does the work surprisingly well! \n The issue we faced last week was the difficulty in quantifying how good our material is. Thermal conductivity measurements are not as straight forward as one may think and after trying out different ways of measuring, we realized it would be a time savior to dig down in literature again. One or two days of research and we now have a decent summary of the alternatives out there. Hopefully we can have results in the near future. Too bad the whole country is on vacation though…',
}

const blogpost2 = {
  title: <h2>Reaching out to customers</h2>,
  content: 'During these weeks the goal has been to ',
}

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
          <div className="sidePicture" />
        </MediaQuery>
        <div className="blogWrapper">
          <h1
            style={{
              color: '#3a5b6c',
              textAlign: 'center',
              marginBottom: 30,
              marginTop: 50,
            }}
          >
            BLOG
          </h1>
          {blogpost1.title}
          <LongText content={blogpost1.content} limit={limit} />
          <div className="divider" />
          {blogpost2.title}
          <LongText content={blogpost2.content} limit={limit} />
        </div>
      </div>
    )
  }
}
// <MediaQuery minDeviceWidth={769}>{buttons}</MediaQuery>

export default Blog
