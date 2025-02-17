export const styles = {
    container: {
        borderRadius: '30px',
        border: '1px solid #E9EBE4',
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
    },

    childContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            gap: '30px',
        },
    },

    title: {
        fontSize: '16px',
        fontWeight: 700,
        paddingBottom: '10px',
    },

    label: {
        fontWeight: 600,
        fontSize: '16px',
        lineHeight: '20px',
        paddingBottom: '10px',
        display: 'flex',
        alignItems: 'center',
    },

    marker: (color) => ({
        background: color,
        width: "12px",
        height: "12px",
        borderRadius: "30px",
        marginRight: "15px",
    }),

    primaryText: {
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '38px',
        color: '#F1B314',
    },

    tabsContainer: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '@media (max-width: 678px)': {
            flexDirection: 'column-reverse',
            gap: '15px',
            alignItems: 'center',
        }
    },

    tabs: {
        display: 'flex',
        color: '#2E4E3577',
        background: '#E9EBE4',
        borderRadius: '30px',
        fontSize: '14px',
        fontWeight: 600,
        fontFamily: 'Raleway',
        border: '3px solid #E9EBE4',
        transition: '0.5s',
        boxSizing: 'border-box',
        width: 'fit-content',
        margin: '0 10px 10px 0',
        '@media (max-width: 678px)': {
            margin: '0',
            width: '100%',
            justifyContent: 'space-evenly',
        }
    },

    tab: {
        padding: '4px 14px',
        boxSizing: 'border-box',
        textAlign: 'center',
        transition: '0.2s',
        '@media (max-width: 678px)': {
            width: '50%',
        },
        '&:hover': {
            color: '#000000',
        },
    },

    selectedTab: {
        backgroundColor: '#FFFFFF',
        borderRadius: '30px',
        padding: '4px 14px',
        color: '#000',
        boxSizing: 'border-box',
        textAlign: 'center',
        '@media (max-width: 678px)': {
            width: '50%',
        }
    },

    link: {
        color: '#2E4E3599',
        fontWeight: 600,
        marginTop: '20px',
        textDecorationColor: '#2E4E3599',
        textDecorationThickness: '1.5px',
        fontFamily: 'Raleway',
    },
}