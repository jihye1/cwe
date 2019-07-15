const instance = ReactDOM.render(<App />, rootElement);
foo(instance); // ASYNC_RENDER_RETURN_VALUE alarm

import ReactDOM from 'react-dom';

ReactDOM.render(
    <div dangerouslySetInnerHTML={{ __html: "myHTML" }}>
        <Children /> {/* BAD_DANGER_WITH_CHILDREN alarm */}
    </div>, document.getElementById("root")
);

import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div onClick="console.log('clicked')"> {/* BAD_EVENT_HANDLER alarm */}
                Hello
            </div>
        );
    }
}
