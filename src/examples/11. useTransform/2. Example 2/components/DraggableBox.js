"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framer_motion_1 = require("framer-motion");
const DraggableBox = () => {
    const x = (0, framer_motion_1.useMotionValue)(0);
    const y = (0, framer_motion_1.useMotionValue)(0);
    const backgroundColor = (0, framer_motion_1.useTransform)(x, [-100, 100], ["#ff0000", "#00ff00"]);
    return (<framer_motion_1.motion.div drag dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }} style={{ x, y, backgroundColor }} className="w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer">
      <span className="text-white">Drag me!</span>
    </framer_motion_1.motion.div>);
};
exports.default = DraggableBox;
