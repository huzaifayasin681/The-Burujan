import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#050505',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '1px solid #333'
                }}
            >
                {/* Simple Gold Spire */}
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                    <path d="M50 5 L90 95 H10 L50 5 Z" fill="#D4AF37" />
                </svg>
            </div>
        ),
        { ...size }
    );
}
