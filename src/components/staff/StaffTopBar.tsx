import { Search } from "@carbon/react";
import Filter from "../shared/Filter";

export default function StaffTopBar({ heading }: { heading: string }) {
    return (
        <div className="staff-top-bar">
            <h1 className="staff-top-bar-title">{heading}</h1>
            <div className="staff-top-bar-actions">
                <Search
                    labelText="Search"
                    size="lg"
                    style={{ minWidth: '200px' }}
                />
                <Filter />
            </div>
        </div>
    )
}
