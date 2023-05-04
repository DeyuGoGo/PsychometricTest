// App.js
import React, { Suspense, useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';

import ExpensiveComponent from './ExpensiveComponent';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
         { <ExpensiveComponent />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
