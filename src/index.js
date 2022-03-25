import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LogProvider } from './Context/LogContext';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyBiBK69hKs-o6AXxGhOHcJ77TNvdoUPjjM",
  authDomain: "chat-20505.firebaseapp.com",
  projectId: "chat-20505",
  storageBucket: "chat-20505.appspot.com",
  messagingSenderId: "294049514900",
  appId: "1:294049514900:web:6e9c2142f613ceb6d1fb81"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <LogProvider>
        <App/>
      </LogProvider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
