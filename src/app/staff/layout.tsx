import StaffNavBar from "@/components/staff/StaffNavBar";
import StaffFooter from "@/components/staff/StaffFooter";

export default function StaffLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <StaffNavBar />
            <main>
                {children}
            </main >
            <StaffFooter />
        </>
    );
}
