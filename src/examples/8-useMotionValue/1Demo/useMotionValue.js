"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const MotionValueComponent = () => {
    const x = (0, framer_motion_1.useMotionValue)(0);
    (0, framer_motion_1.useMotionValueEvent)(x, "animationStart", () => {
        console.log("animation started on x");
    });
    (0, framer_motion_1.useMotionValueEvent)(x, "change", (latest) => {
        console.log("x changed to", latest);
    });
    return (<framer_motion_1.motion.div className="box" drag dragConstraints={{ left: 0, right: 200 }} style={{ x }}/>);
};
exports.default = MotionValueComponent;
