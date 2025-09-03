"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const ScrollAnimation = () => {
    const { scrollY } = (0, framer_motion_1.useScroll)();
    const scale = (0, framer_motion_1.useTransform)(scrollY, [0, 300], [1, 1.5]);
    const opacity = (0, framer_motion_1.useTransform)(scrollY, [0, 300], [1, 0]);
    return (<div className="h-screen flex items-center justify-center">
      <framer_motion_1.motion.div className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg" style={{ scale, opacity }}></framer_motion_1.motion.div>
      <div className="h-[150vh] w-full"></div>
    </div>);
};
exports.default = ScrollAnimation;
