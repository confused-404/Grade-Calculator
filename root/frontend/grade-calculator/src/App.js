import React from 'react';
import GradeForm from './GradeForm';

function App() {
  const handleSubmit = (formData) => {
    console.log(formData); // You can handle the form data submission here
  };

  return (
    <div className="App">
      <GradeForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
