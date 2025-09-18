import { DataTable, TableBody, TableCell, Table as CarbonTable, TableHead, TableHeader, TableRow } from "@carbon/react";

interface TableProps {
    rows: Array<{ id: string;[key: string]: any }>;
    headers: Array<{ key: string; header: string }>;
    loading?: boolean;
}

export default function Table({
    rows,
    headers,
    loading = false
}: TableProps) {
    if (loading) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                Loading...
            </div>
        );
    }

    if (!rows || rows.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#6f6f6f' }}>
                No data available
            </div>
        );
    }

    return (
        <DataTable rows={rows} headers={headers}>
            {({
                rows,
                headers,
                getTableProps,
                getHeaderProps,
                getRowProps,
                getCellProps
            }) => (
                <CarbonTable {...getTableProps()}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableHeader {...getHeaderProps({ header })}>
                                    {header.header}
                                </TableHeader>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow {...getRowProps({ row })}>
                                {row.cells.map((cell) => (
                                    <TableCell {...getCellProps({ cell })}>
                                        {cell.value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </CarbonTable>
            )}
        </DataTable>
    );
}