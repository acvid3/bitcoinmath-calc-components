export const sx = {
    container: {
        border: '2px #F1B314 dashed',
        borderRadius: '30px',
        padding: '40px 40px 80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        textAlign: 'center',
        fontFamily: 'Raleway',
        fontSize: '18px',
        fontWeight: 600,
        width: '1015px',
        boxSizing: 'border-box',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },
}