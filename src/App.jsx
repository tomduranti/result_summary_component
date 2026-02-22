import { useState } from 'react';

import "./sass/main.scss"

import ResultSection from './components/organisms/ResultSection/ResultSection';
import SummarySection from './components/organisms/SummarySection/SummarySection';

function App() {
  return (
    <div className="result_container">
      <ResultSection />
      <SummarySection />
    </div>
  )
}

export default App