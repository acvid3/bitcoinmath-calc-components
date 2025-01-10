export const sx = {
    container: {
        flex: 1,
        maxWidth: '325px',
        width: '100%',
        '@media (max-width: 678px)': {
            maxWidth: 'unset',
        },
    },

    paper: {
        padding: '20px',
        backgroundColor: '#E9EBE4',
        borderRadius: '30px',
        border: '1px solid #E9EBE4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    button: {
        marginTop: 2,
        backgroundColor: '#3c6e47',
        borderRadius: '30px'
    }
};
