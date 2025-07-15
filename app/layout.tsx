import { FC, PropsWithChildren } from "react";
import { NavigationWrapper } from "../components/navigation-wrapper";

import "./globals.scss";

const RootLayout: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body>
        <NavigationWrapper>
          {children}
        </NavigationWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
