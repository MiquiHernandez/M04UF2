import CountButton from './CountButton';
import './App.css';

function App() {
  return (
    <div className="App">
  		<form className="formulario">
			<input type="text" name="msg" placeholder="Escribe"/> 
			<p><CountButton /></p>
		</form>
  	</div>
  );
}

export default App;
