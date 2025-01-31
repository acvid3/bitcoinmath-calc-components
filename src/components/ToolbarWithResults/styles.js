export const sx = {

    container: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '30px',
        border: '1px solid #E9EBE4',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            gap: '30px',
        },
    },

    label: {
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '20px',
        color: '#2E4E35',
    },

    primaryText: {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '35px',
        color: '#F1B314',
        marginTop: '16px',
    },

    button: {
        borderRadius: '30px',
        border: 'none',
        height: '35px',
        background: '#E9EBE4',
        padding: '12px 24px',
        fontSize: '14px',
        fontWeight: 700,
        color: '#18391F',
        textTransform: 'none',
        "&:hover": {
            backgroundColor: "#E9EBE4",
            boxShadow: "none",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "10px",
    },

    link: {
        color: '#2E4E35',
        marginTop: '20px',
        textDecorationColor: '#2E4E35',
    },

    xLink: {
        borderRadius: '100%',
        border: '1px solid #E9EBE4',
        height: '35px',
        width: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '10px',
    }
}