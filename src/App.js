import './App.css';
import Header from './Header';
import { Route, Redirect } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import ProjectDetails from './ProjectDetails';

function App() {
	return (
		<div className='App'>
			<Header />
			<Route path='/' exact render={() => <Redirect to='/portfolio' />} />
			<Route path='/portfolio' exact component={Portfolio} />
			<Route path='/about' component={About} />
			<Route
				path='/portfolio/:id'
				render={(props) => <ProjectDetails id={props.match.params.id} />}
			/>
		</div>
	);
}

export default App;
