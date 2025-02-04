export const sx = {
    parentContainer: {
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1360px',
        justifyContent: 'center',
        gap: '20px',
        '@media (max-width: 1200px)': {
            width: 'unset',
        },
        '@media (max-width: 678px)': {
            padding: '0',
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
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    toolbarPaper: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '20px',
        boxShadow: 'none'
    },

    resultsBox: {
        width: '100%',
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
        width: '700px',
        borderRadius: '30px',
        height: 'fit-content',
        overflow: 'hidden',
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
        gap: '20px'
    },

    chartPaper: {
        border: '1px solid #E9EBE4',
        boxShadow: 'none',
        // height: '600px',
        width: '497px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px',
        '@media (max-width: 1200px)': {
            // width: 'unset',
        },
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },

    infoCardPaper: {
        boxShadow: 'none',
        border: '1px solid #E9EBE4',
        width: '497px',
        borderRadius: '30px',
        '@media (max-width: 1200px)': {
            // width: 'unset',
        },
        '@media (max-width: 678px)': {
            width: '100%',
        },
    },
}