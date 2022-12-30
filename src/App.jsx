//components
import UserForm from "./components/UserForm"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"

// Hooks
import {useForm} from "./hooks/UseForm";
import { useState } from "react";

import {GrFormPrevious, GrFormNext} from "react-icons/Gr"
import  {FiSend} from 'react-icons/fi'
import './App.css';
import Steps from "./components/Steps";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
const [data, setData] = useState(formTemplate);

const updateFieldHandler = (key, value) => {
  setData((prev) => {
    return { ...prev, [key]: value};
  });
};

  const formComponents = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
  <Thanks data={data} />
  ];

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className="App">
      <div className="header">
      <h1>Deixe sua avaliação</h1>
      <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produtos</p>

      </div> 
      <div className="form-container">
        <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (<button type="button" onClick={() => changeStep(currentStep - 1)} >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>)}
              {!isLastStep ? (
                  <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
              )}
            </div>
          </form>
        
      </div>
    </div>
  )
}

export default App
