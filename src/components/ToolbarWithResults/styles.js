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
            gap: '20px',
            alignItems: 'center',
            textAlign: 'center',
        },
    },

    label: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '18.78px',
        color: '#2E4E35',
        '@media (max-width: 678px)': {
            paddingBottom: '20px',
        }
    },

    primaryText: {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '35px',
        color: '#F1B314',
    },

    buttonsBox: {
        textAlign: 'right',
        '@media (max-width: 678px)': {
            order: 1,
        },
    },

    button: {
        borderRadius: '30px',
        border: 'none',
        height: '35px',
        background: '#E9EBE4',
        padding: '12px 24px',
        fontSize: '16px',
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
        '@media (max-width: 678px)': {
            width: '247px',
        }
    },

    link: {
        color: '#2E4E3599',
        marginTop: '20px',
        textDecorationColor: '#2E4E3599',
        fontSize: '16px',
        fontFamily: 'Raleway',
        fontWeight: 600,
        '@media (max-width: 678px)': {
            textAlign: 'center',
            margin: '0px',
        },
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
    },

    linkBox: {
        margin: '10px 10px 0 0',
        '@media (max-width: 678px)': {
            textAlign: 'center',
            margin: '0px',
        },
    }
}