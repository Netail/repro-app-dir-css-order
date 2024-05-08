// Uncomment this 'use client' to see the css of test_root__IkZ5h being imported again, resulting in a wrong order
// 'use client';

import { TestHeader } from "./test-header/test-header";
import { FC, PropsWithChildren } from "react";

export const NavigationWrapper: FC<PropsWithChildren> = ({ children }) => (
    <>
        <TestHeader>
            This is a header
        </TestHeader>
        <main>
            {children}
        </main>
        <footer>
            This is a footer
        </footer>
    </>
);