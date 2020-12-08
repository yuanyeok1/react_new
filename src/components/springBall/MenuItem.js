import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    rotate:360,
    transition: {
      x: { stiffness: 1000, 
        velocity: -100 
      }
    }
  },
  closed: {
    x:50,
    opacity: 0,
    rotate:0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuItem = ({ label,onClick }) => {
  return (
    <motion.div
      className="item"
      variants={variants}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {label}
    </motion.div>
  );
};

export default MenuItem