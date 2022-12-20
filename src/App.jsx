//components
import UserForm from "./components/UserForm"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"

// Hooks
import {useForm} from "./hooks/UseForm";

import {GrFormPrevious, GrFormNext} from "react-icons/Gr"

import './App.css';


function App() {
  const formComponents = [<UserForm/>, <ReviewForm/>, <Thanks/>];

  const {currentStep, currentComponent} = useForm(formComponents)

  return (
    <div className="App">
      <div className="header">
      <h1>Deixe sua avaliação</h1>
      <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produtos</p>

      </div> 
      <div className="form-container">
        <p>etapas</p>
          <form>
            <div className="inputs-container"></div>
            <div className="actions">
              <button type="button">
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              <button type="submit">
                
                <span>Avançar</span>
                <GrFormNext />
              </button>
            </div>
          </form>
        
      </div>
    </div>
  )
}

export default App
