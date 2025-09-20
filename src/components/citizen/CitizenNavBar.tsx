'use client';
import { useLanguageStore } from "@/utils/LanguageSwitcher";
import { Menu } from "@carbon/icons-react";
import { Header, HeaderContainer, HeaderMenuButton, HeaderMenuItem, HeaderName, HeaderNavigation, SideNav, SideNavLink } from "@carbon/react";
import Logo from "@/components/shared/Logo";

export default function CitizenNavBar() {
    const { message } = useLanguageStore();

    const citizenMenu = {
        myGrievances: { href: "/citizen/mygrievances", text: message.MyGrievances || "My Grievances" },
        submit: { href: "/citizen/submit", text: message.Submit || "Submit Grievance" },
        notification: { href: "/citizen/notification", text: message.Notifications || "Notifications" },
        contact: { href: "/citizen/contact", text: message.Contact || "Contact" },
        settings: { href: "/citizen/settings", text: message.Settings || "Settings" },
        privacyPolicy: { href: "/citizen/privacy-policy", text: message.PrivacyPolicy || "Privacy Policy" },
        termsandConditions: { href: "/citizen/terms-and-conditions", text: message.TermsandConditions || "Terms & Conditions" },
    };

    return (
        <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
                <Header aria-label="Citizen Portal Header" className="citizen_header">
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
                        <Logo variant="citizen" />
                        <div className="citizen-nav-container">
                            <HeaderNavigation>
                                <HeaderMenuItem href={citizenMenu.myGrievances.href}>
                                    {citizenMenu.myGrievances.text}
                                </HeaderMenuItem>
                                <HeaderMenuItem href={citizenMenu.submit.href}>
                                    {citizenMenu.submit.text}
                                </HeaderMenuItem>
                                <HeaderMenuItem href={citizenMenu.notification.href}>
                                    {citizenMenu.notification.text}
                                </HeaderMenuItem>
                            </HeaderNavigation>
                            <HeaderMenuButton
                                aria-label="Open citizen menu"
                                isActive={isSideNavExpanded}
                                onClick={onClickSideNavExpand}
                                renderMenuIcon={<Menu height={34} width={34} />}
                            />
                        </div>
                    </div>
                </Header>
                <SideNav className="sidebar" isPersistent={false} expanded={isSideNavExpanded} aria-label="Citizen navigation">
                    {Object.values(citizenMenu).map((item) => (
                        <SideNavLink key={item.href} href={item.href}>{item.text}</SideNavLink>
                    ))}
                </SideNav>
            </>
        )} />
    );
}