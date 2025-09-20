'use client';
import React from 'react';

interface LogoProps {
    /**
     * The variant of the logo to display
     */
    variant?: 'citizen' | 'staff';
    /**
     * Custom text to display instead of default variants
     */
    customText?: string;
    /**
     * Additional CSS classes to apply
     */
    className?: string;
    /**
     * Whether the logo should be clickable and navigate to home
     */
    clickable?: boolean;
    /**
     * Custom href for navigation (defaults to appropriate home for variant)
     */
    href?: string;
}

export default function Logo({
    variant = 'citizen',
    customText,
    className = '',
    clickable = true,
    href
}: LogoProps) {
    // Default text based on variant
    const defaultText = variant === 'citizen' ? 'Gunaso Nepal' : 'Staff Portal';
    const displayText = customText || defaultText;

    // Default href based on variant
    const defaultHref = variant === 'citizen' ? '/citizen' : '/staff';
    const navigationHref = href || defaultHref;

    // CSS classes based on variant
    const variantClass = variant === 'citizen' ? 'citizen-logo' : 'staff-logo';
    const combinedClassName = `${variantClass} ${className}`.trim();

    if (clickable) {
        return (
            <a
                href={navigationHref}
                className={`logo-link ${combinedClassName}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                {displayText}
            </a>
        );
    }

    return (
        <div className={combinedClassName}>
            {displayText}
        </div>
    );
}