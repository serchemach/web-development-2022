import logo from './logo.svg';
import './App.css';
import {Button, SecondButton} from './Button/Button';
import { ClassComponent } from './ClassComponent/ClassComponent';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './Home/Home';
import { AsteroidCard } from './AsteroidCard/AsteroidCard';
import {createContext, useReducer, useEffect} from 'react'
import { reducer } from './Reducer';
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from './AsteroidConstants/AsteroidConstants';
import { DestructionPage } from './DestructionPage/DestructionPage';
import { ConvertAPIDataToList, GetAPIUrl } from './Home/ApiUtils';

export const AsteroidsContext = createContext(null)

function App() {
  
  const [state, dispatch] = useReducer(reducer, {
    asteroidsList:[],
    destructionList:[],
    distanceMode: ASTEROID_DISTANCE_MODE_KM,
    showMode: ASTEROID_SHOW_MODE_ALL
  })

  useEffect(()=>{
    fetch(GetAPIUrl())
    .then((response)=>response.json()
    .then((resData)=>{
        dispatch({payload:ConvertAPIDataToList(resData), type:"UPDATE_ASTEROIDS_LIST"})
    })).catch((error)=>console.log(error))
  }, [])

  return (
    <div>
      <AsteroidsContext.Provider value={{state:state, dispatch:dispatch}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='toDestroy' element={<DestructionPage />} />
        </Routes>
      </AsteroidsContext.Provider>
    </div>
  );
}

export default App;
