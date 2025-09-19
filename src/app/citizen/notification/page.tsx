import Button from "@/components/shared/Button";
import Filter from "@/components/shared/Filter";
import { Tile } from "@carbon/react";

export default function CitizenNotificationPage() {
    const notifications = ["lorem ipsum 1", "lorem ipsum 2", "lorem ipsum 3"];
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', justifyContent: 'end' }}>
                <Filter />
                <Button kind="ghost" size="sm" style={{ textDecoration: 'none', color: 'inherit' }}>Mark all as read</Button>
            </div>
            <div>
                {notifications.map((notification, index) => (
                    <Tile key={index} style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ fontSize: '12px' }}>{notification}</p>
                        <Button kind="primary" size="sm" style={{ fontSize: '8px' }}>View Details</Button>
                    </Tile>
                ))}
            </div>
        </div>
    );
}
