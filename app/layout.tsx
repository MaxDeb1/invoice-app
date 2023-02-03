import Toolbar from "components/Toolbar";
import "styles/index.scss";
import ThemeProvider from "./theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider>
          <Toolbar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
