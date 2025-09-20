'use client';
import { useLanguageStore } from "@/utils/LanguageSwitcher";
import { Menu } from "@carbon/icons-react";
import { Header, HeaderContainer, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, SideNav, SideNavLink } from "@carbon/react";
import Logo from "@/components/shared/Logo";

export default function StaffNavBar() {
    const { message } = useLanguageStore();

    const staffMenu = {
        dashboard: { href: "/staff", text: message.Dashboard || "Dashboard" },
        tickets: { href: "/staff/ticket", text: message.Tickets || "Tickets" },
        reports: { href: "/staff/reports", text: message.Reports || "Reports" },
        userManagement: { href: "/staff/user_management", text: message.UserManagement || "User Management" },
        settings: { href: "/staff/settings", text: message.Settings || "Settings" },
    };

    return (
        <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
                <Header aria-label="Staff Portal Header" className="staff_header">
                    <div className="staff-nav-container">
                        <Logo variant="staff" />
                        <div className="staff-nav-menu">
                            <HeaderNavigation className="staff-header-navigation">
                                {Object.entries(staffMenu).map(([key, { href, text }]) => (
                                    <HeaderMenuItem key={key} href={href} className="staff-menu-item">
                                        {text}
                                    </HeaderMenuItem>
                                ))}
                            </HeaderNavigation>
                            <HeaderMenuButton
                                aria-label="Open staff menu"
                                isActive={isSideNavExpanded}
                                onClick={onClickSideNavExpand}
                                renderMenuIcon={<Menu height={34} width={34} />}
                                className="staff-menu-button"
                            />
                        </div>
                    </div>
                </Header>
                <SideNav className="sidebar" isPersistent={false} expanded={isSideNavExpanded} aria-label="Staff navigation">
                    {Object.values(staffMenu).map((item) => (
                        <SideNavLink key={item.href} href={item.href}>{item.text}</SideNavLink>
                    ))}
                </SideNav>
            </>
        )} />
    );
}
