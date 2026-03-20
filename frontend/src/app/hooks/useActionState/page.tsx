import MarkdownViewer from '../../../components/MarkdownViewer';
import SignupForm from './_components/SignupForm';

export default function DrugRegistration() {
  return (
    <>
      <MarkdownViewer relativePath="src/app/hooks/useActionState/_components/Explanation.md" />
      <SignupForm />
    </>
  );
}
