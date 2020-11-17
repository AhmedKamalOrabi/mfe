import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const mount = (el) => {
    ReactDOM.render(<App />, el);
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#_marketing_root_elem');
    if(el) {
        mount(el)
    }
}

export { mount }