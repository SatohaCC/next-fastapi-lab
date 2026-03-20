import Link from 'next/link';

import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div>
      <h1>hook</h1>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '4',
        })}
      >
        <Link href="/hooks/useTranstion">useTranstion</Link>
        <Link href="/hooks/useActionState">useActionState</Link>
      </div>
    </div>
  );
}
