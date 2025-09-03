"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScrollSections_1 = __importDefault(require("./components/ScrollSections"));
const App = () => {
    return (<div>
      <ScrollSections_1.default />
      <div className="h-[200vh] bg-gray-800 flex items-center justify-center">
        <h2 className="text-white">Scroll Down</h2>
      </div>
    </div>);
};
exports.default = App;
