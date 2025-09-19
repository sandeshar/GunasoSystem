'use client';

import { CaretLeft } from "@carbon/icons-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Define page configurations based on paths
const pageConfig = {
    '/citizen/submit': {
        title: 'Submit Grievance'
    },
    '/citizen/submit/confirmation': {
        title: 'Grievance Submitted!!!'
    },
    '/citizen/mygrievances': {
        title: 'My Grievances'
    },
    '/citizen/notification': {
        title: 'Notifications'
    },
};

export default function CitizenPageHeader() {
    const pathname = usePathname();

    // Check for dynamic ticket details route
    const isTicketDetailsRoute = pathname.match(/^\/citizen\/mygrievances\/ticketdetails\/\d+$/);

    // Get current page config, only for non-dashboard pages
    let currentConfig = pageConfig[pathname as keyof typeof pageConfig];

    // Handle dynamic ticket details route
    if (isTicketDetailsRoute) {
        currentConfig = { title: 'Ticket Details' };
    }

    // Don't render anything if no config found (e.g., on /citizen dashboard)
    if (!currentConfig) {
        return null;
    }

    return (
        <div style={{ padding: '32px 0' }}>
            <p style={{ fontSize: '16px', textAlign: 'center' }}>{currentConfig.title}</p>
            <Link
                href="/citizen"
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                }}
            >
                <CaretLeft size={24} /> Back
            </Link>
        </div>
    );
}