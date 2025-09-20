'use client';

import CitizenNavBar from "@/components/citizen/CitizenNavBar";
import CitizenFooter from "@/components/citizen/CitizenFooter";
import CitizenPageHeader from "@/components/citizen/CitizenPageHeader";

export default function CitizenLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CitizenNavBar />
            <main>
                <CitizenPageHeader />
                {children}
            </main>
            <CitizenFooter />
        </>
    );
}
