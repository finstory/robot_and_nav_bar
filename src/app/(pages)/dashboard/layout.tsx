import SlideBar from "@/components/Dashboard/SlideBar/SlideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-950 w-full h-full flex flex-row text-slate-300 selection:bg-blue-600 selection:text-white">
      <SlideBar />
      {children}
    </div>
  );
}
