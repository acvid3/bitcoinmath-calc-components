export const sx = {
    parentContainer: {
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '20px',
        maxWidth: '1360px',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    infoContainer: {
        width: '1015px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
    },

    toolbarPaper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        boxShadow: 'none'
    },

    resultsBox: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-between',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    resultsPaper: {
        border: '1px solid #E9EBE4',
        boxShadow: 'none',
        width: '800px',
        borderRadius: '30px',
        height: 'fit-content',
        overflow: 'hidden',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
    },

    chartBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },

    chartPaper: {
        border: '1px solid #E9EBE4',
        boxShadow: 'none',
        height: '500px',
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

    infoCardBox: {
        display: 'flex',
        gap: '15px',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            gap: '15px',
        },
    },

    infoCardPaper: {
        boxShadow: 'none',
        width: '497px',
        // width: '100%',
        borderRadius: '30px',
        border: '1px solid #E9EBE4',
        boxSizing: 'border-box',
        height: 'min-content',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },
}