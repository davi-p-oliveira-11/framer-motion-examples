"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnimatedGallery_1 = __importDefault(require("./components/AnimatedGallery"));
const App = () => {
    return (<div className="mt-[170rem]">
      <AnimatedGallery_1.default />
    </div>);
};
exports.default = App;
