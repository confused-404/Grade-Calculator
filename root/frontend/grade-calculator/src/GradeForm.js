import React, { useState } from 'react';
import './style/styles.css'; // Import the CSS file

function GradeForm({ onSubmit }) {
  const [currentGrade, setCurrentGrade] = useState('');
  const [intendedGrade, setIntendedGrade] = useState('');
  const [finalExamWeight, setFinalExamWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      currentGrade: parseFloat(currentGrade),
      intendedGrade: parseFloat(intendedGrade),
      finalExamWeight: parseFloat(finalExamWeight)
    });
  };

  return (
    <div className="form-container">
      <h2>Grade Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentGrade">Current Grade:</label>
          <input 
            type="number" 
            id="currentGrade" 
            value={currentGrade} 
            onChange={(e) => setCurrentGrade(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="intendedGrade">Intended Grade:</label>
          <input 
            type="number" 
            id="intendedGrade" 
            value={intendedGrade} 
            onChange={(e) => setIntendedGrade(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="finalExamWeight">Final Exam Weight (%):</label>
          <input 
            type="number" 
            id="finalExamWeight" 
            value={finalExamWeight} 
            onChange={(e) => setFinalExamWeight(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default GradeForm;
