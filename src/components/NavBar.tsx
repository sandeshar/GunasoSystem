'use client';
import { useLanguageStore } from "@/utils/LanguageSwitcher";
import { LogoReact } from "@carbon/icons-react";
import { Header, HeaderContainer, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, SideNav, SideNavItem, SideNavLink } from "@carbon/react";

export default function NavBar({ role }: { role?: 'citizen' | 'staff' }) {
    const { message } = useLanguageStore();
    const citizenMenu = {
        contact: { href: "/citizen/contact", text: message.Contact },
        settings: { href: "/citizen/settings", text: message.Settings },
        privacyPolicy: { href: "/citizen/privacy-policy", text: message.PrivacyPolicy },
        termsandConditions: { href: "/citizen/terms-and-conditions", text: message.TermsandConditions },
    };
    const staffMenu = {
        dashboard: { href: "/staff/dashboard", text: message.Dashboard },
        tickets: { href: "/staff/tickets", text: message.Tickets },
        reports: { href: "/staff/reports", text: message.Reports },
        settings: { href: "/staff/settings", text: message.Settings },
    };
    return (
        <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
                <Header aria-label="Carbon Header" className="custom_header" >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {role != 'staff' &&
                            <HeaderName prefix="" />}
                        <LogoReact height={112} width={112} />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            isActive={isSideNavExpanded}
                            onClick={onClickSideNavExpand} />
                        <HeaderNavigation>
                            {role === 'citizen' && Object.values(citizenMenu).map((item) => (
                                <HeaderMenuItem key={item.href} href={item.href}>{item.text}</HeaderMenuItem>
                            ))}
                            {role === 'staff' && Object.values(staffMenu).map((item) => (
                                <HeaderMenuItem key={item.href} href={item.href}>{item.text}</HeaderMenuItem>
                            ))}
                        </HeaderNavigation>
                    </div>
                </Header>
                <SideNav className="sidebar" isPersistent={false} expanded={isSideNavExpanded} aria-label="Side navigation">
                    {role === 'citizen' && Object.values(citizenMenu).map((item) => (
                        <SideNavLink key={item.href} href={item.href}>{item.text}</SideNavLink>
                    ))}
                    {role === 'staff' && Object.values(staffMenu).map((item) => (
                        <SideNavLink key={item.href} href={item.href}>{item.text}</SideNavLink>
                    ))}
                </SideNav>
            </>
        )
        } />
    )
}
