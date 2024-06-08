import { useMediaQuery } from 'react-responsive';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {  github, tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


export default function A() {

    const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" }) 

    return <div>  <SyntaxHighlighter language="javascript" style={isDarkMode ? tomorrowNight : github}>
{`function foo() {
    console.log("hello");
}`}
  </SyntaxHighlighter></div>
}