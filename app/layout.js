import "./globals.css";
import StateContextProvider from "../context/stateContext";
import UiLayout from "./ui-layout";

export const metadata = {
  title: "Shop",
  description: "developing by parsa rahimi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <StateContextProvider>
          <UiLayout>{children}</UiLayout>
        </StateContextProvider>
      </body>
    </html>
  );
}
