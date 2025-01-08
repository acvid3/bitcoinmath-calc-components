export const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
};

export const labelStyles = {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#2E4E35',
    padding: '0 5px',
};

export const messageStyles = {
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: 600,
    color: '#888',
    padding: '0 15px',
    marginTop: '-5px',
}

export const inputStyles = {
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
            padding: '0px',
        },
    },
};
