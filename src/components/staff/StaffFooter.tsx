"use client";

import Link from "next/link";

export default function StaffFooter() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '1rem',
            borderTop: '1px solid #afafafff',
            fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
        }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <Link href='#' style={{ textDecoration: 'none' }} className="text-inherit">Contact</Link>
                <Link href='#' style={{ textDecoration: 'none' }} className="text-inherit">Privacy</Link>
                <Link href='#' style={{ textDecoration: 'none' }} className="text-inherit">Terms and conditions</Link>
            </div>
            <p>
                © Copyright
            </p>
        </footer>
    );
}