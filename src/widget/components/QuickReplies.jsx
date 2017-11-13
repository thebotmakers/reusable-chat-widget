import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import QuickReplyButton from './QuickReplyButton'

const Container = styled.div`
  display: inline-block;
  left: 0;
  position: relative;
  transition: left 500ms ease-out;
  white-space: nowrap;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const Buttons = styled.div`

`

const Text = styled.div`
    border-radius: 25px;
    font-size: 14px;
    font-weight: normal;
    margin: 4px 0px;
    padding: 8px 18px;
    line-height: 1.4;
    opacity: ${props => props.sent ? 1 : .7};
    background: #D8D8D8;
    color: #2B2B2B;
`

export default class QuickReplies extends Component {

    render() {

        const buttons = this.props.message.quick_replies.map((button) =>
            <QuickReplyButton
                key={button.title.replace(' ', '_')}
                title={button.title}
                image_url={button.image_url}
                onQuickReplyClick={this.props.onQuickReplyClick}
            />
        );

        return (
            <div>
                <Wrapper>
                    <Text>{this.props.message.text}</Text>
                </Wrapper>
                <Container className="quickreplies" >
                    <Buttons>
                        {buttons}
                    </Buttons>
                </Container>
            </div>
        )
    }
}

QuickReplies.propTypes = {
    //buttons: PropTypes.array.isRequired
}