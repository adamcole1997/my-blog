import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { compose, createStore , applyMiddleware} from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { sagaWatcher, sagaWatcherId } from './redux/sagas';

const saga = createSagaMiddleware()


const store = createStore(rootReducer,compose(
  applyMiddleware(
    thunk,saga
  )
))
saga.run(sagaWatcher)
saga.run(sagaWatcherId)

const app = (
  <ChakraProvider> 
  <Provider store={store}>
        <App />
     </Provider>
     </ChakraProvider>
  )

ReactDOM.render(
  
    app
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
