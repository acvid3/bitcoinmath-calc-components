export const sx = {
    parentContainer: {
        padding: '30px 0',
        display: 'flex',
        maxWidth: '1360px',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '15px',
        '@media (max-width: 1200px)': {
            width: '100%',
        },
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },

    toolbarPaper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxShadow: 'none',
    },

    resultsBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    resultsPaper: {
        width: '700px',
        borderRadius: '30px',
        height: 'fit-content',
        overflow: 'hidden',
        boxSizing: 'border-box',
        '@media (max-width: 1200px)': {
            width: '100%',
        },
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    chartBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },

    chartPaper: {
        height: '400px',
        // width: '1000px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    infoCardBox: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'space-between',
        alignItems: 'top',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            gap: '15px',
        },
    },

    infoCardPaper: {
        width: '300px',
        borderRadius: '30px',
        boxSizing: 'border-box',
        height: 'min-content',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },
};
