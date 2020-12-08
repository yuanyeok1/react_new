import React, { useState } from 'react';
import posed from 'react-pose';
// import { observer } from 'mobx-react-lite';
import './style.css';

const BALL_SIZE = 50
const GUTTER = 15
const clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth)
const clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)

const initPos = {
  left: clientWidth - BALL_SIZE - GUTTER,
  bottom: BALL_SIZE + GUTTER
}

const Box = posed.div({
  draggable: true,
  pressable: true,
  init: {
    scale: 1,
    ...initPos
  },
  drag: { scale: 1.2 },
  dragBounds: {
    left: -initPos.left,
    right: GUTTER,
    bottom: GUTTER,
    top: - (clientHeight - BALL_SIZE - 70)
  },
  dragEnd: {
    x: 0,
    transition: { type: 'spring' }
  }
});

let posY
let _expand = false

const handleDargStart = e => posY = e.touches[0].clientY

export default () => {
  const [expand,setExpand] = useState(false)
  const handleDragEnd = (e) => {
    if (posY === e.changedTouches[0].clientY) {
      setExpand(_expand = !_expand)
    }
  }

  return (
    <Box className="box" 
          onDragStart={handleDargStart} 
          onDragEnd={handleDragEnd} 
    >
      {
        expand ? <div>123</div> : <div>456</div>
      }
    </Box>
  )
};

