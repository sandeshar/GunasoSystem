import Button from "@/components/shared/Button";
import Logo from "@/components/shared/Logo";

export default function CitizenLoginPage() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#2a2a2a',
                color: 'white',
            }}
        >
            {/* Logo at the top */}
            <div style={{
                marginBottom: '120px',
                textAlign: 'center',
                width: '100%'
            }}>
                <Logo variant="citizen" clickable={false} className="login-logo" />
            </div>

            {/* Welcome text */}
            <h1 style={{
                margin: '0 0 40px 0',
                fontSize: '1.2rem',
                color: 'white',
                fontWeight: 300,
                textAlign: 'center',
            }}>
                Welcome to Gunaso Nepal
            </h1>

            {/* Login form */}
            <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <label style={{ fontSize: '14px', color: 'white', marginBottom: '8px', display: 'block' }}>
                        Username
                    </label>
                    <input
                        type="text"
                        style={{
                            backgroundColor: '#3a3a3a',
                            border: '1px solid #555',
                            borderRadius: '4px',
                            color: 'white',
                            padding: '12px',
                            fontSize: '14px',
                            width: '100%',
                            boxSizing: 'border-box',
                            outline: 'none',
                        }}
                    />
                </div>
                <div>
                    <label style={{ fontSize: '14px', color: 'white', marginBottom: '8px', display: 'block' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        style={{
                            backgroundColor: '#3a3a3a',
                            border: '1px solid #555',
                            borderRadius: '4px',
                            color: 'white',
                            padding: '12px',
                            fontSize: '14px',
                            width: '100%',
                            boxSizing: 'border-box',
                            outline: 'none',
                        }}
                    />
                </div>
                <Button
                    style={{
                        marginTop: '20px',
                        padding: '12px 24px',
                        fontSize: '14px',
                        background: '#4285f4',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        alignSelf: 'flex-start',
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    );
}
