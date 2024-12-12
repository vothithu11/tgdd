
import AdminButton from "@/components/AdminButton";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en" translate="no">
      <body className="max-w-[1200px] mx-auto bg-[#f2f4f7]">
        <header><AdminButton/></header>
        <main>{children}</main>
      </body>
    </html>
    );
  }
