'use client'
import { useLanguageStore } from "@/utils/LanguageSwitcher";
import { Tile } from "@carbon/react";
import { useEffect, useState } from "react";

export default function Staff() {
    const [data, setData] = useState(null);
    const { language } = useLanguageStore();
    useEffect(() => {
        fetch('/api/tickets')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <main>
            {data ? (Object.values(data).map((item: any) => (
                <Tile key={item.id} style={{ margin: '1rem' }}>
                    <h2>{language === 'en' ? item.title_en : item.title_np}</h2>
                    <p>ward_id: {item.ward_id}</p>
                    <p>status: {item.status}</p>
                    <p>priority: {item.priority}</p>
                </Tile>
            ))) : (
                <p>Loading...</p>
            )}
        </main>
    )
}
