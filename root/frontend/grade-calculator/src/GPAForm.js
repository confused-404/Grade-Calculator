import React, { useState } from 'react';
import './style/styles.css'; // Import the CSS file

function GPAForm({ onSubmit }) {
  const [currentGPA, setCurrentGPA] = useState('');
  const [numberOfClasses, setNumberOfClasses] = useState('');
  const [upcomingGrade, setUpcomingGrade] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = {
        current_gpa: parseFloat(currentGPA),
        classes_taken: parseInt(numberOfClasses),
        upcoming_grade: parseFloat(upcomingGrade)
      };
      // Call your REST API to calculate the new GPA
      const result = await fetch('http://localhost:8080/calculate-gpa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await result.json();
      // Pass the result to the parent component
      onSubmit(data.newGPA);
    } catch (error) {
      console.error('Error calculating new GPA:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>GPA Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentGPA">Current GPA:</label>
          <input 
            type="number" 
            id="currentGPA" 
            value={currentGPA} 
            onChange={(e) => setCurrentGPA(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="numberOfClasses">Number of Classes Taken:</label>
          <input 
            type="number" 
            id="numberOfClasses" 
            value={numberOfClasses} 
            onChange={(e) => setNumberOfClasses(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="upcomingGrade">Upcoming Grade (%):</label>
          <input 
            type="number" 
            id="upcomingGrade" 
            value={upcomingGrade} 
            onChange={(e) => setUpcomingGrade(e.target.value)} 
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

export default GPAForm;
