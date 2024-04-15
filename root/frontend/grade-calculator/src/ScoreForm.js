import React, { useState } from 'react';
import './style/styles.css'; // Import the CSS file

function ScoreForm({ onSubmit }) {
  const [currentGrade, setCurrentGrade] = useState('');
  const [intendedGrade, setIntendedGrade] = useState('');
  const [finalExamWeight, setFinalExamWeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        current_grade: parseFloat(currentGrade),
        grade_goal: parseFloat(intendedGrade),
        final_weight: parseFloat(finalExamWeight)
      };
      // Call your REST API to calculate the grade
      const result = await fetch('http://localhost:8080/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await result.json();
      // Pass the result to the parent component
      onSubmit(data.finalGrade);
    } catch (error) {
      console.error('Error calculating grade:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Test Score Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentGrade">Current Grade (%):</label>
          <input 
            type="number" 
            id="currentGrade" 
            value={currentGrade} 
            onChange={(e) => setCurrentGrade(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="intendedGrade">Intended Grade (%):</label>
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Calculating...' : 'Calculate'}
        </button>
      </form>
    </div>
  );
}

export default ScoreForm;
