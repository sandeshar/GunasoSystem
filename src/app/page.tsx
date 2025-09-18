'use client'
import { ToggleTheme } from "@/components/ToggleTheme";
import { ToggleLanguage } from "@/components/ToggleLanguage";
import { Button, InlineNotification, ToastNotification, Toggle } from "@carbon/react";
import { useLanguageStore } from "@/utils/LanguageSwitcher";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<'AD' | 'BS'>('AD');
  const { message } = useLanguageStore();

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      height: '100vh',
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '3rem',
        fontSize: '2.5rem',
        fontWeight: '600'
      }}>
        {message.Title}
      </h1>
      {/* Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: '3rem',
        padding: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ToggleTheme />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ToggleLanguage />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Toggle
            labelText="Language"
            id="mode-toggle"
            labelA="AD"
            labelB="BS"
            toggled={mode === 'BS'}
            onToggle={() => setMode(mode === 'AD' ? 'BS' : 'AD')}
          />
        </div>
      </div>

      {/* Main Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <Link href="/citizen" style={{ textDecoration: 'none', flex: '1', minWidth: '250px' }}>
          <Button
            kind="primary"
            size="lg"
          >
            {message.Citizen}
          </Button>
        </Link>
        <Link href="/staff" style={{ textDecoration: 'none', flex: '1', minWidth: '250px' }}>
          <Button
            kind="secondary"
            size="lg"
          >
            {message.Staff}
          </Button>
        </Link>
      </div>
    </div>
  );
}
