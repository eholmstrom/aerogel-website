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
  title: <h2 style={styles.h2}>Genuine interest from others inspire us</h2>,
  date: <h3 style={styles.h3}>August 10, 2018</h3>,
  content:
    'The flatness of the Baltic sea this summer is turning into some kind of desperation. We are taking less days off work which is a good thing, but mainly it generates a lot of travel searching, video watching etc… Also, without having any scientific backup here, I am sure that regular surfing makes me work more efficiently. Maybe someone else can back me up on this? Sitting here writing I know the sea is finally gaining some swell and I can’t wait to paddle out! \n\n Summarizing the week, I realize that things really start to move forward. I would guess it is a mix of having a surf to look forward to but also that people in Sweden start to work again. Not only are they answering, it is fantastic when people listen to our idea and give us feedback. Most of the time, people love what they hear and that is great motivation! \n\n And the website is FINALLY up. Hosting a website not only means buying a domain… I am so glad Eric is a pro in these things! \n\n Next week will include some corporation discussions, looking into legal documents for startups and continue to develop the website. Have a windy weekend!',
  author: <h3 style={styles.author}>Jakob Mattsson</h3>,
}

const blogpost3 = {
  title: <h2 style={styles.h2}>Visit to a local rubber manufacturer</h2>,
  date: <h3 style={styles.h3}>August 17, 2018</h3>,
  content:
    'Our project is progressing rapidly, sometimes so fast that we need to dedicate some time to come up with new short-term goals, which, I guess, itself is just a luxury problem. \n\n We had an incredibly informative and useful visit to a local rubber manufacturer. They were knowledgeable about specifics with rubber manufacturing that helped us. It also gave rise to some difficulties with using our chosen materials. However, we quickly realized that as an entrepeneur you are going to face some problems along the way and they are just meant to be solved. \n\n The school start is coming closer and that means preparing for our thesis work. An increasing number of other duties are grabbing our attention and are ready to distract us from our development of wetsuits. But so far have we managed to keep our minds on completing our many short-term goals.',
  author: <h3 style={styles.author}>Eric Holmström</h3>,
}

const blogpost4 = {
  title: <h2 style={styles.h2}>Time to mingle</h2>,
  date: <h3 style={styles.h3}>August 24, 2018</h3>,
  content:
    'A week full of inspiration and new opportunities. The atmosphere around Ideon in Lund is full of networking possibilities when the city starts to be alive again. People have energy, goals, optimism and it is just amazing to be a part of this startup world. Never have I felt such a force to talk to random people and it is super refreshing to have insight in other companies and learn from them. One meeting worth mentioning this week is the one with Jan Persson from Revolwe who produces surf leashes from sustainable materials. \n And our wetsuit project goes forward quickly. Our nearest goal is to test our production method in the following four weeks and that is super crucial step for us. School is really approaching and it will of course take some time of the project but we love the idea of doing a combo this fall. \n\n Learning of the week: from the workshop with business angel Hampus Jakobsson. No one really cares about your solution, only the problem that you are solving.',
  author: <h3 style={styles.author}>Eric Holmström</h3>,
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
          {blogpost4.title}
          {blogpost4.date}
          <LongText content={blogpost4.content} limit={limit} />
          {blogpost4.author}
          <div className="blog-divider" />
          {blogpost3.title}
          {blogpost3.date}
          <LongText content={blogpost3.content} limit={limit} />
          {blogpost3.author}
          <div className="blog-divider" />
          {blogpost2.title}
          {blogpost2.date}
          <LongText content={blogpost2.content} limit={limit} />
          {blogpost2.author}
          <div className="blog-divider" />
          {blogpost1.title}
          {blogpost1.date}
          <LongText content={blogpost1.content} limit={limit} />
          {blogpost1.author}
        </div>
      </div>
    )
  }
}

export default Blog
