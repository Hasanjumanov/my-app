
import Api from "./components/app/api";
import Login from "./components/app/login";
import Sign from "./components/app/sign";
import { Route, Switch } from 'react-router-dom';

function Main() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/sign' component={Sign}/>
                <Route exact path="/api" component={Api} />
            </Switch>
        </>
    );
}

export default Main;