'use client';
interface UnhideButtonProps {
    count: number;
    onUnhide: () => void;
}

export function UnhideButton({ count, onUnhide }: UnhideButtonProps) {
    return (
        <button
            onClick={onUnhide}
            className="unhide-button"
            style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            Unhide All ({count})
        </button>
    );
}