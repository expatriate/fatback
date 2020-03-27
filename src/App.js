import React from 'react';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from 'react-router-dom';

import AuthController from './controllers/auth-controller';

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                AuthController.isAuthenticated ? (
                children
            ) : (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />)
            }
        />
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                {/*<ul>
                    <li>
                        <Link to="/login">login Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>

                <button onClick={() => {AuthController.login('', '')}}>
                    LOGIN
                </button>*/}

                <Switch>
                    <Route>
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/protected">
                        <MainPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
