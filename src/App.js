import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Components/Clock/Clock';
import Memories from './Components/Memories/Memories';

function App() {
	return (
		<div className="App">
			<h3>1 YEAR STRONG IN:</h3>
			<Clock date={new Date()} />
			<br />
			<br />
			<Memories />
		</div>
	);
}

export default App;
