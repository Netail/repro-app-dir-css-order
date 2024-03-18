import { TestHeader } from '@repo/ui-navigation/src/test-header';
import css from './page.module.css';

export default function Page(): JSX.Element {
  return (
    <main>
      <TestHeader className={css.override}>
        Hello world
      </TestHeader>
    </main>
  );
}
