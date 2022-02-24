import React, { useRef } from 'react';
import './style.css';
import { Comments } from './Comments';
import { ImperativeHandle } from './ImperativeHandle';
import { CountUseState } from './CountUseState';

export default function App() {
  const ref = useRef();
  return (
    <div>
      <h1>Comments</h1>
      <Comments />
      <ImperativeHandle />
      <CountUseState ref={ref} />
      <button onClick={() => ref.current.increment()}>diff count</button>
      <button onClick={() => ref.current.yell()}>What is the count?</button>
    </div>
  );
}
