import logo from './logo.svg';
import './App.css';
import Head from './component/Head';
import Body from './component/Body';
import {Provider} from 'react-redux'
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from './component/MainContainer';
import WatchPage from './component/WatchPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element:<MainContainer/>
    }, {
      path: "watch",
      element:<WatchPage/>
    }
  ]
    
  
}])

function App() {
  return (
    <Provider store={store} >

   
    <div className="App">
        <Head/>
        
        <RouterProvider router={appRouter } />

      </div>
   </Provider>
  );
}

export default App;
