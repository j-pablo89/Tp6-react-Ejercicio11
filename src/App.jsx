import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Titulo from './components/Titulo';


function App() {
  return (
    <div className='text-center pt-4'>
     <Titulo></Titulo>
     <Formulario></Formulario>
    </div>
  )
}

export default App
