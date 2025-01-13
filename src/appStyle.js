export const sx = {
    parentContainer: {
        padding: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '20px',
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
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
        '@media (max-width: 678px)': {
            flexDirection: 'column',
            width: '100%',
        },
    },

    resultsPaper: {
        borderRadius: '30px',
        height: 'fit-content',
        overflow: 'hidden'
    },

    chartBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },

    chartPaper: {
        height: '600px',
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
}