import { useState } from 'react';

import "./sass/main.scss"

import ResultSection from './components/organisms/ResultSection/ResultSection';
import SummarySection from './components/organisms/SummarySection/SummarySection';

export default function App() {
  return (
      <article className="result_container">
        <ResultSection />
        <SummarySection />
      </article>
  )
}