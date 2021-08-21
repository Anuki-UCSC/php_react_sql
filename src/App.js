import './App.css';
import LoginPage from './components/LoginPage';
import ListViewPage from './components/ListViewPage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import EditProfile from './components/EditProfile';
import Insertuser from './components/Insertuser';

function App() {

  const isloggin = sessionStorage.getItem('loggedin');
  console.log(isloggin);
  return (
    <div className="App">

      <BrowserRouter>
      {isloggin==='true'?
      (
        <Switch>
          <Route path='/home'>
            <ListViewPage/>
          </Route>
          <Route path='/edit/:id' component={EditProfile}/>
          <Route path='/insert'>
            <Insertuser/>
          </Route>
        </Switch>
      
      ):(
      <Route exact path='/'>
      <LoginPage/>
      </Route>
      )
      }
      </BrowserRouter>

{/* <EditProfile/> */}
    </div>
  );
}

export default App;
