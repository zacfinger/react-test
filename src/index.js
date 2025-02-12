import "array-flat-polyfill";
import "./jest-matchers";

import $ from "./methods/constructor";

// Import all of the methods which will modify the $.prototype straight away
import "./methods/attr";
import "./methods/change";
import "./methods/click";
import "./methods/data";
import "./methods/delay";
import "./methods/filter";
import "./methods/find";
import "./methods/first";
import "./methods/get";
import "./methods/html";
import "./methods/is";
import "./methods/last";
import "./methods/unique";
import "./methods/map";
import "./methods/parent";
import "./methods/submit";
import "./methods/text";
import "./methods/toArray";
import "./methods/trigger";
import "./methods/type";
import "./methods/children";
import "./methods/closest";

export { default as until } from "./helpers/until";

// Export the whole thing
export default $;
