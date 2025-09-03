"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const RangeSlider = () => {
    const scale = (0, framer_motion_1.useSpring)(1);
    const changeHandler = (e) => scale.set(parseFloat(e.target.value));
    return (<div>
      <framer_motion_1.motion.button className="box" style={{ scale }}/>
      <div className="mt-[6rem]">
        <input type="range" min={0.5} max={5} step={0.01} defaultValue={1} onChange={changeHandler}/>
      </div>
    </div>);
};
exports.default = RangeSlider;
