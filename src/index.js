import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import context, {initialState} from './context'

function Wrap(){
    const [state, set] = useState(initialState)
    return <context.Provider value={{
        state, // combine "current" with new "state"
        setState: s=> set(c=> ({...c, ...s}))
    }}>
        <App />
    </context.Provider>
}

ReactDOM.render(<Wrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
