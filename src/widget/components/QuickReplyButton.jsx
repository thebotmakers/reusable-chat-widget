
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.div`
  background: #fff;
  border-radius: 1.3em;
  color: #0084ff;
  display: inline-block;
  align-items: center;
  margin: 6px 4px;
  height: 44px;
  min-width: 44px;    
`
const Img = styled.div`
  background-size: contain;
`

export default class QuickReplyButton extends Component {

  render() {
    return (
      <Button>
        <Img className='QuickReplyImg'>{this.props.image_url}</Img>
        <p>{this.props.title}</p>
      </Button >
    )
  }
}

QuickReplyButton.propTypes = {
  title: PropTypes.string.isRequired,
}