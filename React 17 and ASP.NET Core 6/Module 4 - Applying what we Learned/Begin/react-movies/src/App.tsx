import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffectExamples from './UseEffectExamples';
import Grandparent from './Grandparent';
import ValueContext from './ValueContext';
import DisplayGrade from './DisplayGrade'
import ErrorBoundary from './ErrorBoundary';
import CSSExamples from './CSSExamples';

function App() {
  const [hide, setHide] = useState(false);
  const grades = [75, 95, -5, 55];

  return (
    <>
      {/* <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples />} 

      <ValueContext.Provider value={hide}>
        <Grandparent />
      </ValueContext.Provider> */}

      {/* Note from the instructor: Please note that the following code will throw an error.
        That is to be expected as part of the lesson on Error Boundaries.
      */}

      {grades.map((grade, index) =>
        <ErrorBoundary key={index} errorUI={<h3>There was an error displaying the grade</h3>}>
          <DisplayGrade grade={grade} />
        </ErrorBoundary>
      )}

    </>
  )
}

export default App;
