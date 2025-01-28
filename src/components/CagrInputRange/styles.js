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
    }
}