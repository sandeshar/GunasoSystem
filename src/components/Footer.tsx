"use client";

import { AddComment, Home, Notification, UserFeedback } from "@carbon/icons-react";
import { Column, Grid } from "@carbon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({ role }: { role?: string }) {
    const pathname = usePathname();
    const menu = [
        { name: "Home", link: "/citizen", logo: <Home size={32} /> },
        { name: "Grievance", link: "/citizen/mygrievances", logo: <UserFeedback size={32} /> },
        { name: "Submit", link: "/citizen/submit", logo: <AddComment size={32} /> },
        { name: "Notification", link: "/citizen/notification", logo: <Notification size={32} /> },
    ];
    if (role === 'staff') {
        return (<p style={{ textAlign: 'center', padding: '1rem', borderTop: '1px solid #afafafff' }}>© Copyright</p>);
    }
    return (
        <Grid style={{ padding: '10px', width: '100%', position: 'fixed', bottom: 0, borderTop: '1px solid #afafafff', backgroundColor: 'inherit' }}>
            {menu.map((item) => {
                let isActive = false;

                if (item.link === "/citizen") {
                    // Home is active only on exact match or just /citizen
                    isActive = pathname === "/citizen" || pathname === "/";
                } else {
                    // Other items are active if pathname starts with their specific path
                    isActive = pathname.startsWith(item.link);
                }

                return (
                    <Column key={item.name} sm={1} md={2} lg={4}>
                        <Link
                            href={item.link}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                textDecoration: 'none',
                                color: 'inherit',
                                borderTop: isActive ? '3px solid #0f62fe' : '3px solid transparent',
                                paddingTop: '8px',
                                transition: 'border-color 0.2s ease'
                            }}
                        >
                            {item.logo}
                            <span style={{ fontSize: '16px', textAlign: 'center' }}>{item.name}</span>
                        </Link>
                    </Column>
                );
            })}
        </Grid>
    );
}
