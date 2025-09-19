import { FilterEdit } from "@carbon/icons-react";

export default function Filter() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500', width: 'fit-content', cursor: 'pointer' }}>
            <FilterEdit size={18} />
            Filter
        </div>
    )
}
