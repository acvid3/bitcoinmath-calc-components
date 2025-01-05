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
};

export const inputStyles = {
    '& .MuiOutlinedInput-root': {
        height: '40px',
        borderRadius: '8px',
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
    },
};
