import { } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { noctisObscuroTheme } from '../../data';


interface HighlighterFactory {
  children: string;
  customStyle?: React.CSSProperties;
  showLineNumbers?: boolean;
}

const HighlighterFactory = ({ children, customStyle, showLineNumbers }: HighlighterFactory) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={noctisObscuroTheme}
      showLineNumbers={showLineNumbers}
      customStyle={customStyle}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default HighlighterFactory;
