import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import QuestionList from './QuestionList';
import Result from './Result';

function App() {
  const [result, setResult] = useState(null);

  return (
    <div>
      <h1>台灣人格測試</h1>
      <HashRouter>
        <Routes>
          <Route path="/" element={<QuestionList onResult={setResult} />} />
          <Route path="/result" element={<Result result={result} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
