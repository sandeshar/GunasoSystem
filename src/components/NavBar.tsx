'use client';
import { useLanguageStore } from "@/utils/LanguageSwitcher";
import { Menu } from "@carbon/icons-react";
import { Header, HeaderContainer, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, SideNav, SideNavLink } from "@carbon/react";

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
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
                        <div style={{
                            height: '80px',
                            width: '80px',
                            borderRadius: '100%',
                            backgroundColor: '#1900ffff',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}>Gunaso Nepal</div>
                        <HeaderMenuButton
                            aria-label="Open menu"
                            isActive={isSideNavExpanded}
                            onClick={onClickSideNavExpand}
                            renderMenuIcon={<Menu height={34} width={34} />}
                            style={{ marginLeft: 'auto' }}
                        />
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
