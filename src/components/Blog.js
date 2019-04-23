import React from 'react'
import MediaQuery from 'react-responsive'
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Button from './Button'
import TextMobileStepper from './GridListStepper'
import SlideShow from './SlideShow'
import LongText from './LongText'
import InstagramEmbed from 'react-instagram-embed'

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
  author: <h3 style={styles.author}>Jakob Mattsson</h3>,
}

const blogpost5 = {
  title: <h2 style={styles.h2}>Time for thesis work</h2>,
  date: <h3 style={styles.h3}>September 13, 2018</h3>,
  content:
    'These last couple of weeks has been a period of transition from working on the project as a company to working on our thesis work. This requires us to change our mindset to a more academic thought process. Now the focus has to be more scientific with more emphasis on experiments and such. At the same time, both of us are enrolled in one course respectively, which so far has taken some time from our thesis work. However, we have progressed according to plan and so far no big failures. The start of our thesis work has also included a lot of paperwork to get it formally approved from all parties, and this has been considerably more strenous than either one of us expected; but it seems to be very close to final approval now.\n\n In the next week we hope to try our production process for a seamless wetsuit. Therefore focus this week has been to prepare for this try. We still have our hopes up for this method to work, even though it is not essential for the continuation of the project.',
  author: <h3 style={styles.author}>Eric Holmström</h3>,
}

const blogpost6 = {
  title: <h2 style={styles.h2}>Things are moving</h2>,
  date: <h3 style={styles.h3}>October 5, 2018</h3>,
  content:
    'You have to love doing things scientifically when you are an engineer. Instead of trial and error, we are dedicating this period of our master thesis to come up with theories and experimental designs to make our work as logical as possible. Sometimes it feels like the complete opposite of what we are doing as entrepreneurs.\n\nOn the other hand, the scientific world is so slooooooow. More than one month has passed and we are finally in the lab building prototypes. The upcoming weeks will be full of laboratory tests and simulations.\n\nLearning of the week: don’t go public transport if you’re picking up chemicals. If you saw two guys with one 25L bucket each on the train this week it was probably us…',
  author: <h3 style={styles.author}>Jakob Mattsson</h3>,
}

const blogpost7 = {
  title: (
    <h2 style={styles.h2}>
      The end of the beginning
    </h2>
  ),
  date: <h3 style={styles.h3}>January 17, 2019</h3>,
  content:
    'It’s been a while. For the last months we have been working on our thesis. Tomorrow is the D-Day; the presentation. Our six months long thesis work at the Industrial Production facility at Lund University has come to an end. But our wetsuit project won’t end here. We have decided to continue working with our project. After the presentation, Jakob will be a full-fledged engineer, while I have half a semester of courses before I can title myself as one.\n\nTime flies. Jakob and I met the first day of the university, at the orientation. He was probably wearing sandals and a backpack, whereas I was properly dressed. JK, but he was the happiest camper there. We became good friends in the blink of an eye. During these five years we have known each other, Jakob has been full of ideas, both good and bad (mostly bad). I have been his filter and the idea that finally caught my eye was the wetsuit idea. I’m glad we realized it.\n\nThis is the start of something great!',
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
            <img
              src={require('../assets/viklogga_4_vit.png')}
              alt="logo"
              width="160"
              height="160"
            />
          </div>
        </MediaQuery>
        <div className="blogWrapper">
          <h1>BLOG</h1>
          {blogpost7.title}
          {blogpost7.date}
          <LongText content={blogpost7.content} limit={limit} />
          {blogpost7.author}
          <div className="blog-divider" />
          {blogpost6.title}
          {blogpost6.date}
          <LongText content={blogpost6.content} limit={limit} />
          {blogpost6.author}
          <div className="blog-divider" />
          {blogpost5.title}
          {blogpost5.date}
          <LongText content={blogpost5.content} limit={limit} />
          {blogpost5.author}
          <div className="blog-divider" />
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
        <div className="instaWrapper">
          <InstagramEmbed
            url="https://www.instagram.com/p/BrhmEK0A3AW/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    )
  }
}

export default Blog
