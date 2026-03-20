import MarkdownViewer from '../../../components/MarkdownViewer';
import { PickingList } from './_components/PickingList';

export default function DrugRegistration() {
  return (
    <>
      <MarkdownViewer relativePath="src/app/hooks/useOptimistic/_components/Explanation.md" />
      <PickingList
        initialMeds={[
          { id: 1, name: 'アセトアミノフェン錠', isPicked: false },
          { id: 2, name: 'ロキソプロフェンナトリウム', isPicked: false },
          { id: 3, name: 'アレグラ錠', isPicked: false },
          { id: 4, name: 'ムコダイン錠', isPicked: false },
          { id: 5, name: 'ガスター10', isPicked: false },
        ]}
      />
    </>
  );
}
