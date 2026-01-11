import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'The Burujan | Digital Empire Architects';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    // We use a simple geometric approximation of the "Tower" logo since we can't load external SVGs easily in Edge
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#050505',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Decorative border */}
                <div style={{
                    position: 'absolute',
                    top: 20, left: 20, right: 20, bottom: 20,
                    border: '2px solid #333',
                    display: 'flex',
                }} />

                {/* Logo Icon Approximation */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', marginBottom: 20 }}>
                    <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                        <path d="M50 5 L90 95 H10 L50 5 Z" fill="#D4AF37" />
                        <path d="M50 5 L90 95 L50 95 Z" fill="#B5952F" />
                    </svg>
                </div>

                <div
                    style={{
                        fontSize: 80,
                        fontWeight: 900,
                        color: 'white',
                        marginBottom: 10,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                    }}
                >
                    The Burujan
                </div>

                <div
                    style={{
                        fontSize: 30,
                        color: '#D4AF37',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        fontWeight: 'bold',
                    }}
                >
                    Engineering Digital Empires
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
