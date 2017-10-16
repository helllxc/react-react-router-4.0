
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Toggle from '../components/toggle'
import SelectArray from '../components/select'
import Home from '../components/home/home'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Toggle">Toggle</Link></li>
                <li><Link to="/SelectArray">SelectArray</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/Toggle" component={Toggle}/>
            <Route path="/SelectArray" component={SelectArray}/>
        </div>
    </Router>
)

// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample