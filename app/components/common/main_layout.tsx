import MainHeader from "./header/main_header";
import TopHeader from "./header/top_header";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <TopHeader />
        <MainHeader />
      </header>
      <main className="overflow-hidden">{children}</main>
    </>
  );
}
