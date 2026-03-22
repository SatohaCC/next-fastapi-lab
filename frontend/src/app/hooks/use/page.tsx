import MarkdownViewer from '../../../components/MarkdownViewer';
import DemoContainer from './_components/DemoContainer';
import { fetchStockData } from './_components/api';

export default function DrugRegistration() {
  const initialStockPromise = fetchStockData('med-123');

  return (
    <>
      <MarkdownViewer relativePath="src/app/hooks/use/_components/Explanation.md" />
      <DemoContainer initialStockPromise={initialStockPromise} />
    </>
  );
}
