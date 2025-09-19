'use client';

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import CitizenPageHeader from "@/components/CitizenPageHeader";

export default function CitizenLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar role="citizen" />
            <main>
                <CitizenPageHeader />
                {children}
            </main>
            <Footer />
        </>
    );
}
