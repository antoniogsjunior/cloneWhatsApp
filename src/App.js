import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
    componentWillMount(){

        const firebase = require("firebase");

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCCYuK94A4UTwKPXZd7UELLxfO7Vmdq4u0",
            authDomain: "whatsapp-clone-b6abc.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-b6abc.firebaseio.com",
            projectId: "whatsapp-clone-b6abc",
            storageBucket: "whatsapp-clone-b6abc.appspot.com",
            messagingSenderId: "709876818682"
          };
        firebase.initializeApp(config);
      

    }
    
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
