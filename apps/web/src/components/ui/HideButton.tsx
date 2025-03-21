'use client'
interface HideButtonProps {
    onHide: () => void;
}

export function HideButton({ onHide }: HideButtonProps) {
    return (
        <button 
            onClick={onHide}
            className="hide-button"
            style={{
                padding: '4px 8px',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            Hide
        </button>
    );
}