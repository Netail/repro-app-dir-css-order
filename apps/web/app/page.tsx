import { Test } from '@repo/ui/src/test';
import css from './page.module.css';

export default function Page(): JSX.Element {
  return (
    <main>
      <Test className={css.override}>
        Hello world
      </Test>
    </main>
  );
}
