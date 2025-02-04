export const sx = {
    tableCell: {
        padding: '5px 20px',
        margin: '0px',
        '@media (max-width: 678px)': {
            padding: '8px',
        },
    },

    tableRow: {
        transition: '0.1s',
        '&:hover': {
        },
        // '@media (max-width: 678px)': {
        //     margin: '0 15px',
        //     fontWeight: 600,
        // },
        // "&:nth-of-type(even)": {
        //     '@media (max-width: 678px)': {
        //         background: '#E9EBE4',
        //     },
        // },
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