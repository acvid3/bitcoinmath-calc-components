export const styles = {
    container: {
        flex: 1,
        maxWidth: '325px',
        width: '325px',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
        '@media (max-width: 678px)': {
            maxWidth: 'unset',
            width: '100%',
        },
    },
    paper: {
        padding: '20px',
        backgroundColor: '#E9EBE4',
        borderRadius: '30px',
        border: '1px solid #E9EBE4',
        // height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },
};
