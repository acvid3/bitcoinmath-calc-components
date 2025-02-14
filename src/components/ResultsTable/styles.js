export const sx = {
    tableCell: {
        padding: '0',
        margin: '0px',
        border: 'none',
        textAlign: 'center',
        verticalAlign: 'top',
        fontSize: '14px',
        // maxWidth: '60px',
        // width: 'min-content',
        width: '60px',
        '@media (max-width: 678px)': {
            padding: '8px',
        },
    },

    tableCellInfo: {
        padding: '5px 0',
        margin: '0px',
        fontWeight: '700',
        textAlign: 'center',
        border: 'none',
        // width: '60px',

        borderRight: '1px solid #E9EBE4',
        width: 'fit-content',
        '@media (max-width: 678px)': {
            padding: '8px',
        },
    },

    tableRow: {
        transition: '0.1s',
        color: '#2E4E35',
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
    },

    labelBox: {
        paddingTop: '10px',
        // display: 'inline',
    }
}