import React, { useState } from 'react';
import './style/styles.css'; 
import Modal from './Modal.js';

function ScoreForm({ onSubmit }) {
  const [currentGrade, setCurrentGrade] = useState('');
  const [intendedGrade, setIntendedGrade] = useState('');
  const [finalExamWeight, setFinalExamWeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resultGrade, setResultGrade] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        current_grade: parseFloat(currentGrade),
        grade_goal: parseFloat(intendedGrade),
        final_weight: parseFloat(finalExamWeight)
      };
      const result = await fetch('https://secret-grade-calculator-calcs.fly.dev/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await result.json();
      setResultGrade(data.required_score);
      setShowModal(true);
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
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} grade={resultGrade} />
    </div>
  );
}

export default ScoreForm;
