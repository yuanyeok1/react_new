import React from 'react';
import {motion, useCycle} from "framer-motion";
import MenuItem from './MenuItem'
import './style.scss';
import SvgIcon from '@/components/svgIcon';

const BALL_SIZE = 50
const clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
const topLimitSize = - (clientHeight - BALL_SIZE - 70)

const Navvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default ({NavItems}) => {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <motion.div
        className={`box${isOpen ? ' is-open' : ''}`}
        drag
        dragConstraints={{left:0,right:0,bottom:0,top:topLimitSize}}
        dragTransition={{
          bounceStiffness: 300,
          bounceDamping: 10,
        }}
        dragElastic={1}
        whileTap={{ scale: 1.2 }}
        animate={isOpen ? "open" : "closed"}
        exit={{ opacity: 0 }}
      >
        <div className="item" onClick={toggleOpen}>
          <SvgIcon link="plus" color="#FFF" size="30px" />
        </div>
        {
          // active && 
          (
            <motion.div className="menu-nav" variants={Navvariants}>
              {NavItems.map(({label,onClick}) => (
                <MenuItem 
                  {...{label, onClick: () => {
                    onClick();
                    toggleOpen();
                  }}}
                  key={label} 
                />
              ))}
            </motion.div>
          )
        }
      </motion.div>
    </>
  )
};

