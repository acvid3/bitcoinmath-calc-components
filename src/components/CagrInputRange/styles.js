export const styles = {
    container: {
        width: '100%',
        padding: '10px 20px',
        boxSizing: 'border-box',
        borderRadius: '30px',
        backgroundColor: '#E9EBE4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },

    descriptionContainer: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-start',
    },

    typography: {
        fontSize: '14px',
        fontWeight: 600,
        color: '#2E4E35',
    },

    slider: {
        color: '#ffffff',
        height: '8px',

        '& .MuiSlider-thumb': {
            width: '16px',
            height: '16px',
            backgroundColor: '#2E4E35',
        },
        '& .MuiSlider-markLabel': {
            transform: 'translateX(-50%) translateY(10px)',
            marginTop: '-10px',
        },
        '& .MuiSlider-track': {
            backgroundColor: '#2E4E35',
        },
        "& .MuiSlider-rail": {
            opacity: 1,
            backgroundColor: "#fff",
        },
        "& .MuiSlider-mark": {
            opacity: 0,
        },
        '& .MuiSlider-valueLabel': {
            backgroundColor: '#E9EBE4',
            color: '#F1B314',
            borderRadius: '10px',
            fontWeight: '700',
            padding: '2px 6px',
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
        margin: '-3px 0 0 20px'
    }
}