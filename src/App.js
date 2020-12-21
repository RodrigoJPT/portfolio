import './App.css';
import Header from './Header';
import { Route, Redirect } from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import ProjectDetails from './ProjectDetails';
import Icons from './Icons';
function App() {
	return (
		<div className='App'>
			<Header />
			{/* <Route path='/' exact render={() => <Redirect to='/portfolio' />} /> */}
			<Route path='/' exact component={Portfolio} />
			<Route path='/about' exact component={About} />
			<Route
				path='/projects/:id'
				render={(props) => <ProjectDetails id={props.match.params.id} />}
			/>
			<Icons />
		</div>
	);
}

export default App;
