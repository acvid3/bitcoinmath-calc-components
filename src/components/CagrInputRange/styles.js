export const styles = {
    container: {
        width: '100%',
        // padding: '10px 35px 10px 25px',
        padding: '20px',
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
        margin: '10px',

        '& .MuiSlider-thumb': {
            width: '16px',
            height: '16px',
            backgroundColor: '#2E4E35',
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
                boxShadow: 'none', // Прибирає блакитний фон
            },
        },
        "& .MuiSlider-mark": {
            opacity: 0,
            background: 'red',
            color: 'red',
            padding: '2px',
            borderRadius: '50%',
        },
        '& .MuiSlider-markLabel': {
            // transform: 'translateX(-50%) translateY(10px)',
        },
        "& .MuiSlider-mark[data-index='0'], .MuiSlider-mark[data-index='1'], .MuiSlider-mark[data-index='2']": {
            background: '#F1B314',
            opacity: 1,
        },
        "& .MuiSlider-markLabel[data-index='0'], .MuiSlider-markLabel[data-index='1'], .MuiSlider-markLabel[data-index='2'],": {
            top: '-10px',
            marginLeft: '5px',
            // marginTop: '10px',
            // margin: '10px 0 10px 5px',
        },
        '& .MuiSlider-track': {
            backgroundColor: '#2E4E35',
        },
        "& .MuiSlider-rail": {
            opacity: 1,
        },
        '& .MuiSlider-valueLabel': {
            backgroundColor: '#E9EBE4',
            color: '#F1B314',
            borderRadius: '10px',
            fontWeight: '700',
            top: '40px',
            padding: '0px 10px',
        },
    }
}