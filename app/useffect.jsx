'use client';

import { useState } from 'react';
import { useState, useEffect } from 'react';

export default function Practice() {
  const [count, setCount] = useState(0)  // <-- here
  useEffect(() => {
  console.log(`Count changed to: ${count}`)
}, [count])
  
  return (
    <div className="p-8">
      <h1 className="text-2xl">Click Counter</h1>
      <button onClick={() => setCount(count + 1)} className="mt-4 p-2 bg-blue-500 text-white">
  Clicked {count} times
</button>
    </div>
  )
}
