import { FontAwesomeIcon } from "./icons";
import { FontAwesomeModifier } from "./modifiers";

/**
 * Return a css class for the with font awesome icon
 * @param icon The icon class name
 * @param modifiers The modifiers class names
 */
export function fa(icon: FontAwesomeIcon, ...modifiers: FontAwesomeModifier[]) {
    return "fa fa-" + [icon, ...modifiers.map(x => "fa-" + x)].join(" ");
}
