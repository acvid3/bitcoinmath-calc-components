export const labelStyles = {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#2E4E35',
}

export const primaryTextStyles = {
    fontWeight: 700,
    fontSize: '32px',
    lineHeight: '38px',
    color: '#F1B314',
}

export const buttonStyles = {
    borderRadius: '30px',
    border: 'none',
    height: '40px',
    background: '#E9EBE4',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 700,
    color: '#18391F',
    textTransform: 'none',
    "&:hover": {
        backgroundColor: "#E9EBE4", // Відключає зміну фону при hover
        boxShadow: "none", // Відключає тіні
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "10px",
}

export const linkStyles = {
    color: '#2E4E35',
    marginTop: '20px',
    textDecorationColor: '#2E4E35',
}

export const xLinkStyles = {
    borderRadius: '100%',
    border: '1px solid #E9EBE4',
    height: '40px',
    width: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
}