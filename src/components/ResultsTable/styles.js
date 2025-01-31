export const sx = {
    table: {
        padding: '20px',
        width: '100%',
        boxSizing: 'border-box',
    },

    tableLabel: {
        padding: '0px',
        margin: '0px',
        borderBottom: 'none',
        borderRight: '1px solid #E9EBE4',
        fontSize: '14px',
        fontWeight: 600,

        '@media (max-width: 678px)': {
            padding: '8px',
        },
    },

    tableCell: {
        padding: '5px',
        margin: '0px',
        borderBottom: 'none',
        borderRight: '1px solid #E9EBE4',
        fontSize: '14px',
        fontWeight: 600,

        '@media (max-width: 678px)': {
            padding: '8px',
        },
    },

    tableCellTop: {
        color: '#2E4E3577',
        width: 'min-content',
        padding: '5px',
        margin: '0px',
        border: 'none',
        fontSize: '14px',
        fontWeight: 600,

        '@media (max-width: 678px)': {
            padding: '8px',
        },
    },

    tableRow: {
        transition: '0.1s',
        '&:hover': {

        },
    },

    descriptionCell: {
        padding: '0 0 0 20px',
        marginRight: '-15px',
        '@media (max-width: 678px)': {
            padding: '8px 0 8px 8px',
        },
    },

    descriptionIcon: {
        color: '#00000051',
        border: '0.5px #00000051 solid',
        padding: '0px 6px',
        borderRadius: '100%',
        fontWeight: 800,
        fontSize: '11px',
        transition: '0.1s',
        minWidth: 'unset',
        lineHeight: 'unset',
        textTransform: 'none',
        '&:hover': {
            borderColor: '#f1b314',
            backgroundColor: '#f1b314',
            color: '#ffffff',
        },
        "&:hover + .description, &:focus + .description": {
            display: 'block',
        },
    },

    description: {
        position: 'absolute',
        background: '#ffffff',
        padding: '4px 8px',
        zIndex: '100',
        border: '1px #000 solid',
        display: 'none',
        fontSize: '12px',
        fontWeight: 600,
        margin: '0 0 20px 20px'
    }
}