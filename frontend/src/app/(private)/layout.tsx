import MainDock from "@/ui/organisms/Dock";
import Header from "@/ui/organisms/Header";

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-screen bg-zinc-50 ">
            <Header />
            {children}
            <MainDock />
        </div>
    );
}