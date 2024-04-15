import React from 'react';
import ScoreForm from './ScoreForm';
import GPAForm from './GPAForm';

function App() {
  const handleSubmit = (formData) => {
    console.log(formData); // You can handle the form data submission here
  };

  return (
    <div className="app-container">
      <div className="form-wrapper">
        <ScoreForm onSubmit={handleSubmit} />
      </div>
      <div className="form-wrapper">
        <GPAForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
