export const sx = {
    parentContainer: {
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '15px',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },

    toolbarPaper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        boxShadow: 'none',
        width: '1015px',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    resultsBox: {
        display: 'flex',
        gap: '20px',
        width: '1015px',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    resultsPaper: {
        boxShadow: 'none',
        border: '1px solid #E9EBE4',
        borderRadius: '30px',
        height: 'fit-content',
        overflow: 'hidden',
        width: '700px',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    chartBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },

    chartPaper: {
        boxShadow: 'none',
        border: '1px solid #E9EBE4',
        height: '400px',
        width: '497px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    infoCardPaper: {
        boxShadow: 'none',
        border: '1px solid #E9EBE4',
        width: '497px',
        borderRadius: '30px',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },
}