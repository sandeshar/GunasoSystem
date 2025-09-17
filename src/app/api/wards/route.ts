import Papa from "papaparse";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export const GET = async () => {
    try {
        const filePath = path.join(process.cwd(), "src", "app", "api", "sample_data", "wards.csv");
        const csvContent = await fs.promises.readFile(filePath, "utf8");

        const parsed = Papa.parse(csvContent, { header: true, skipEmptyLines: true });

        return NextResponse.json(parsed.data);
    } catch (error) {
        console.error("Error reading or parsing categories.csv:", error);
        return NextResponse.json({ error: "Failed to read or parse categories.csv" }, { status: 500 });
    }
};
