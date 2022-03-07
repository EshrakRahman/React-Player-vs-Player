import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';

const Index = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));

export default Index;