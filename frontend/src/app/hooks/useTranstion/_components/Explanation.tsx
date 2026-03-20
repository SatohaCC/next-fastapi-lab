import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function Explanation() {
  const filePath = path.join(
    process.cwd(),
    'src/app/hooks/useTranstion/_components/Explanation.md'
  );
  const content = await fs.readFile(filePath, 'utf-8');

  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
