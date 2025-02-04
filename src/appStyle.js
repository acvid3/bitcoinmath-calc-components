export const sx = {
    parentContainer: {
        padding: '30px 0',
        display: 'flex',
        maxWidth: '1360px',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '15px',
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
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    toolbarPaper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        boxShadow: 'none',
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    resultsBox: {
        display: 'flex',
        gap: '20px',
        width: '100%',
        justifyContent: 'space-between',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    resultsPaper: {
        border: '1px solid #E9EBE4',
        boxShadow: 'none',
        width: '100%',
        borderRadius: '30px',
        height: 'fit-content',
        overflow: 'hidden'
    },

    chartBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        '@media (max-width: 678px)': {
            width: '100%',
        },
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