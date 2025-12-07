"use client"; 
import AdminSidebar from "../components/AdminSidebar";
import '../styles/globals.css';
import { usePathname } from 'next/navigation'; 

export default function AdminLayout ({ children }) {
    const pathname = usePathname();
    const hideSidebarPaths = [ '/admin/login'];
    const shouldHideSidebar = hideSidebarPaths.includes(pathname);

    return(
        <div className="flex min-h-screen"> 
            
            {!shouldHideSidebar && <AdminSidebar />}

            <div className={'flex-1 p-4'}>
                
                <div key={pathname}>
                    {children}
                </div>
            </div>
        </div>
    );
}