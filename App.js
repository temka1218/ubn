import { HeaderTop } from './HeaderTop.js';
import { HeaderLarge } from './HeaderLarge.js';

export function App(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(HeaderTop, null),
        React.createElement(HeaderLarge, null)
    );
}