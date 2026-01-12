import logo from './logo.svg';
import './App.css';
import Head from './component/Head';
import Body from './component/Body';
import {Provider} from 'react-redux'
import store from './utils/store';

function App() {
  return (
    <Provider store={store} >

   
    <div className="App">
      <Head/>
     <Body/>
      </div>
   </Provider>
  );
}

export default App;
