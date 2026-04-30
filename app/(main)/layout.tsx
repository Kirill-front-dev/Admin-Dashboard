import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed top-0 w-full z-50 h-16 bg-white dark:bg-slate-900 border-b">
        <Navbar />
      </div>

      <div className="flex pt-16 flex-1">
        <div className="hidden md:block w-[200px] shrink-0">
          <div className="sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        <main className="flex-1 w-full p-5">
          <div className="w-full max-w-[1140px] mx-auto">{children}</div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
