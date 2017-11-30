import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import {World} from "./components/World";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" /> ,
    document.getElementById("example")
);

ReactDOM.render(
    <World firstname="Eric" lastname="Zhao" />,
    document.getElementById("name")
);
