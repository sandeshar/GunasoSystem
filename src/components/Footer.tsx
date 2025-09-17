import { Home } from "@carbon/icons-react";
import { Column, Grid } from "@carbon/react";
import Link from "next/link";

export default function Footer({ role }: { role?: string }) {
    const menu = [
        { name: "Home", link: "/", logo: <Home size={32} /> },
        { name: "My Grievances", link: "/my-grievances", logo: <Home size={32} /> },
        { name: "Submit Grievance", link: "/submit-grievance", logo: <Home size={32} /> },
        { name: "Notification", link: "/notification", logo: <Home size={32} /> },
    ];
    if (role === 'staff') {
        return (<p style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #afafafff' }}>© Copyright</p>);
    }
    return (
        <Grid style={{ padding: '10px', width: '100%', position: 'fixed', bottom: 0, borderTop: '1px solid #afafafff' }}>
            {menu.map((item) => (
                <Column key={item.name} sm={1} md={2} lg={4}>
                    <Link href={item.link} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textDecoration: 'none', color: 'inherit' }}>
                        {item.logo}
                        <span style={{ fontSize: '16px', textAlign: 'center' }}>{item.name}</span>
                    </Link>
                </Column>
            ))}
        </Grid>
    );
}
