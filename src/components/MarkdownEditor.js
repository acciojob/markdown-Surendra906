import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading or real-time preview sync
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [markdown]);

  return (
    <div className="markdown-editor-container">
      {loading && <div className="loading">Loading...</div>}
      
      <div className="editor-pane">
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type markdown here..."
        />
      </div>

      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
