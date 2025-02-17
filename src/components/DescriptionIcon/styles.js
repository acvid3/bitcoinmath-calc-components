export const sx = {
    descriptionIcon: {
        color: '#00000051',
        border: '0.5px #00000051 solid',
        padding: '0px 6px',
        marginRight: '10px',
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
        borderRadius: '30px',
        zIndex: '100',
        border: '1px #F1B314 solid',
        display: 'none',
        fontSize: '14px',
        fontWeight: 600,
        // margin: '0 0 25px 0',
        fontFamily: 'Raleway',
        maxWidth: '300px',
        textAlign: 'center',
    },

    descriptionBackground: {
        background: '#F1B3141A',
        padding: '10px 14px',
        borderRadius: '30px',
    }
}