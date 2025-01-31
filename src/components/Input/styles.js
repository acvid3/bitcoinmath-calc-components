export const sx = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '20px',
    },

    label: {
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        color: '#2E4E35',
        padding: '0 5px',
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
        "& a:hover .description, & a:focus .description": {
            display: 'block',
        },
    },

    message: {
        fontFamily: 'Raleway',
        fontSize: '12px',
        fontWeight: 600,
        color: '#888',
        padding: '0 15px',
        marginTop: '-5px',
    },

    input: {
        '& .MuiOutlinedInput-root': {
            height: '40px',
            borderRadius: '30px',
            backgroundColor: '#F9F9F9',
            '& fieldset': {
                borderColor: '#E9EBE4',
            },
            '&:hover fieldset': {
                borderColor: '#3C6E47',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#3C6E47',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent',
            },
        },
        '& input': {
            '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 100px #F9F9F9 inset',
                padding: '0px 15px',
            },
        },
    },

    descriptionIcon: {
        color: '#00000051',
        border: '0.5px #00000051 solid',
        borderRadius: '100%',
        fontWeight: 800,
        fontSize: '10px',
        transition: '0.1s',
        minWidth: 'unset',
        lineHeight: '10px',
        textTransform: 'none',
        width: '10px',
        height: '18px',
        marginTop: '-3px',
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
        fontFamily: 'Raleway',
        position: 'absolute',
        background: '#ffffff',
        padding: '4px 8px',
        zIndex: '100',
        border: '1px #000 solid',
        display: 'none',
        fontSize: '12px',
        fontWeight: 600,
        margin: '-3px 0 0 20px',
        "a": {
            color: '#2e4e35',
            padding: '2px 5px',
        }
    }
}