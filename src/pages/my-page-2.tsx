import { useMediaQuery } from 'react-responsive';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github, tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';



export default function A() {

  const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" })

  const [ready, setReady] = useState(false); 

  useEffect(() => {
    setReady(true); 
  }, []);

  if(!ready){
    return null;
  }

  return <div>
    <SyntaxHighlighter language="javascript" style={isDarkMode ? tomorrowNight : github}>
      {`function foo() {
    console.log("hello");
}`}
    </SyntaxHighlighter>
  </div>
}