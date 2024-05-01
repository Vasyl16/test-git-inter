import { useCallback, useEffect, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { arr } from './utils/generateArr';
import Search from './Search';

function App() {
  const a = { b: '3' };

  const { b } = a;
  console.log(b);
  return <div className="tutorial"></div>;
}

export default App;
