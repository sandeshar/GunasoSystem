import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function CitizenLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar role="staff" />
            {children}
            <Footer role="staff" />
        </>
    );
}
