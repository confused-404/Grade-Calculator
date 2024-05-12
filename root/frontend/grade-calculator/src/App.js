import React from 'react';
import ScoreForm from './ScoreForm';
import GPAForm from './GPAForm';

function App() {
  // const handleSubmit = (formData) => {
  //   console.log(formData);
  //   ScoreForm.handleSubmit(formData); // You can handle the form data submission here
  // };

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <ScoreForm />
      </div>
    </div>
  );
}

export default App;
