import Navbar from "./_components/navbar";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="px-4 md:px-5 py-6">{children}</main>
    </div>
  );
};
export default PlatformLayout;
