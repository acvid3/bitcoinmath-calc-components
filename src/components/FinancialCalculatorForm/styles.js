export const styles = {
    container: {
        flex: 1,
        maxWidth: '325px',
        width: '100%',
        '@media (max-width: 678px)': {
            maxWidth: 'unset',
        },
    },
    paper: {
        border: '1px solid #E9EBE4',
        boxShadow: 'none',
        padding: '20px',
        backgroundColor: '#E9EBE4',
        borderRadius: '30px',
        // height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    term: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box',
        fontWeight: 600,
        fontFamily: 'Raleway',
        fontSize: '14px',
        color: '#2E4E35',
        padding: '15px 10px',
    }
};
