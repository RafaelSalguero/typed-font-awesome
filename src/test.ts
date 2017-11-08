import * as expect from "expect";
import { fa } from "./index";

expect(fa("user-circle", "2x", "fw")).toBe("fa fa-user-circle fa-2x fa-fw");
expect(fa("adn")).toBe("fa fa-adn");
expect(fa("camera", "stack-1x")).toBe("fa fa-camera fa-stack-1x");