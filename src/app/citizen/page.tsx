import Button from '@/components/shared/Button'
import { Document, IotConnect, ResultDraft, TrashCan, WatsonHealthStatusResolved } from '@carbon/icons-react'
import { FlexGrid, Grid, Row, Tile } from '@carbon/react'
import React from 'react'

export default function Citizen() {
    const records = {
        Gunaso: { icon: <Document size={21} />, Text: '500+ Gunaso submitted' },
        Resolved: { icon: <WatsonHealthStatusResolved size={21} />, Text: '300+\nResolved' },
        Pending: { icon: <ResultDraft size={21} />, Text: '30+\npending' },
        Escalated: { icon: <TrashCan size={21} />, Text: '20+\nescalated' },
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '24px' }}>
                <p style={{ fontSize: '16px' }}>Welcome to the Grievance System</p>
                <p style={{ fontSize: '12px' }}>File your gunaso and track updates in real-time.</p>
                <p style={{ fontSize: '12px' }}>गुनासो सजिलै दर्ता र ट्र्याक गर्नुहोस्</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button kind='primary' size='sm' style={{ fontSize: '8px' }}>Submit Grievance</Button>
                    <Button kind='tertiary' size='sm' style={{ fontSize: '8px' }}>My Grievance</Button>
                </div>
            </div>
            <Grid style={{ gap: '16px', width: '100%', overflowX: 'auto', padding: '0 6px' }}>
                {Object.values(records).map((record, index) => (
                    <Tile key={index} style={{ padding: '10px', minHeight: '68px', minWidth: '83px', textAlign: 'center', border: '1px solid #949494ff' }}>
                        {record.icon}
                        <p style={{ fontSize: '10px', textAlign: 'center', whiteSpace: 'pre-line' }}>{record.Text}</p>
                    </Tile>
                ))}
            </Grid>
        </div>
    )
}
