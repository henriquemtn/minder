import { SidebarProvider } from "@/context/SidebarContext";
import Sidebar from "@/ui/molecules/Sidebar";


export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-row h-screen bg-[#f1f1f1] ">
            <SidebarProvider>
                <Sidebar />
                {children}
            </SidebarProvider>
        </div>
    );
}