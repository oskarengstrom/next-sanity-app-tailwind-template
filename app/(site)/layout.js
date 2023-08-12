import { draftMode } from "next/headers";

export default function Layout({ children }) {
  const preview = draftMode().isEnabled
    ? { token: process.env.SANITY_API_READ_TOKEN }
    : undefined;

  return (
    <div className="border-2 border-slate-400">
      {children}
      {preview && (
        <div className="fixed bottom-0 left-0 right-0 bg-green-200 opacity-75 flex justify-center text-sm py-1 text-green-600">
          Preview!
        </div>
      )}
    </div>
  );
}
