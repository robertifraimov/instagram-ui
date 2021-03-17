
import './App.scss';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import Register from './Register/Register';
import {Switch,Route} from 'react-router-dom';
import Login from './Login/Login';
import Feed from './Feed/Feed';
import { UserService } from './services/user.service';
import { useHistory } from 'react-router-dom';
import { UserContext } from './user-context';
import PostCreate from './PostCreate/PostCreate';
import PostPage from './PostPage/PostPage';
import Profile from './Profile/Profile';
import Search from './Search/Search';

function App() {
    const history = useHistory();
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getMe() {
            try { 
                const user = await UserService.me();
                if (!user) {
                    history.push('/login');
                    return;
                }
                setUser(user);
            } catch(err) {
                console.log(err);
            }
        } 
        getMe();
    }, [history]);

    function isLoggedIn() {
        return !!Object.keys(user).length;
    }

  return (

    <UserContext.Provider value={{user, setUser}} >
        <div className="App">
            { isLoggedIn() && <Header /> }
            <div className="container">
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/post/create">
                        <PostCreate />
                    </Route>
                    <Route path="/post/:id" >
                        <PostPage />
                    </Route>
                    <Route path="/profile/:username" >
                        <Profile />
                    </Route>
                    <Route path="/search" >
                        <Search />
                    </Route>
                    <Route path="/" exact>
                        <Feed />
                    </Route>
                </Switch>
            </div>
        </div>
    </UserContext.Provider>
  );
}

export default App;
