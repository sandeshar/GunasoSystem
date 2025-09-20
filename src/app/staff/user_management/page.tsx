import { Tile } from "@carbon/react";

export default function StaffUserManagementPage() {
    return (
        <main style={{ padding: 24 }}>
            <h1>User Management</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '24px' }}>
                {Array.from({ length: 20 }, (_, i) => (
                    <Tile key={i} style={{
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    </Tile>
                ))}
            </div>
        </main>
    );
}
