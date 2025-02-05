export const styles = {
    container: {
        flex: 1,
        maxWidth: '325px',
        // width: '100%',
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
        boxShadow: 'none',
        border: '1px solid #E9EBE4',
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
};
