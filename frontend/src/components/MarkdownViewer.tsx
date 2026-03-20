import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewerProps {
  relativePath: string;
}

export default async function MarkdownViewer({ relativePath }: MarkdownViewerProps) {
  const filePath = path.join(process.cwd(), relativePath);
  let content = '';
  try {
    content = await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.error('Failed to read markdown file:', error);
    content = 'Failed to load markdown file.';
  }

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
