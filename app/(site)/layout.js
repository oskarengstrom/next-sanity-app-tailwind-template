import Header from "@/components/Header";
import { draftMode } from "next/headers";

export default function SiteLayout({ children }) {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;

  return (
    <div className="light text-primary bg-primary">
      <Header />
      {children}
      {preview && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-300 opacity-85 flex justify-center text-sm py-1 text-green-700">
          Preview Mode Enabled
        </div>
      )}
    </div>
  );
}
