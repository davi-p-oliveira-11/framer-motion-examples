"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnimatedGallery_1 = __importDefault(require("./components/AnimatedGallery"));
const App = () => {
    return (<div>
      <h1 className="text-center text-3xl mb-4">
        Scroll Down to See the Animation
      </h1>
      <div className="h-screen"/>
      <AnimatedGallery_1.default />
    </div>);
};
exports.default = App;
