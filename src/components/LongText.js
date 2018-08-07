import React from 'react'

const readMoreStyle = {
  color: '#3a5b6c',
  fontWeight: 400,
}

class LongText extends React.Component {
  state = { showAll: false }
  showMore = () => this.setState({ showAll: true })
  showLess = () => this.setState({ showAll: false })
  render () {
    const { content, limit } = this.props
    const { showAll } = this.state
    if (content.length <= limit) {
      // there is nothing more to show
      return (
        <div>
          <p>{content}</p>
        </div>
      )
    }
    if (showAll) {
      // We show the extended text and a link to reduce it
      return (
        <div>
          <p>{content}</p>
          <a style={readMoreStyle} onClick={this.showLess}>
            Read less
          </a>
        </div>
      )
    }
    // In the final case, we show a text with ellipsis and a `Read more` button
    const toShow = `${content.substring(0, limit)}...`
    return (
      <div>
        <p>{toShow}</p>
        <a style={readMoreStyle} onClick={this.showMore}>
          Read more
        </a>
      </div>
    )
  }
}

export default LongText
