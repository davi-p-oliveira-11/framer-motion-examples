"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const ColorChanger = () => {
    const hue = (0, framer_motion_1.useSpring)(0, { stiffness: 300, damping: 30 });
    const backgroundColor = (0, framer_motion_1.useTransform)(hue, (h) => `hsl(${h}, 100%, 50%)`);
    const changeHandler = (e) => {
        hue.set(parseFloat(e.target.value));
    };
    return (<div>
      <framer_motion_1.motion.div className="color-box" style={{ backgroundColor, width: 200, height: 200, borderRadius: 16 }}/>
      <div className="mt-4">
        <input type="range" min={0} max={360} step={1} defaultValue={0} onChange={changeHandler}/>
      </div>
    </div>);
};
exports.default = ColorChanger;
