import React from 'react';
import {TextField, Box, Typography, Button} from '@mui/material';
import {containerStyles, inputStyles, labelStyles, messageStyles} from './styles';
import { useResult } from '../../context/ResultContext';
import {inputDescriptions} from "./contsants";
import { sx } from "./styles";

const Input = ({ id, label, value, onChange, placeholder, message }) => {
    const { results } = useResult();

    const isInputError = results?.code?.includes(id);

    const description = inputDescriptions.find(d => d.label === label)?.description;

    return (
        <Box sx={sx.container}>
            {label && <Typography sx={sx.label}>
                {label}
                {description &&
                    <span>
                        <Button sx={sx.descriptionIcon}>i</Button>
                        <Box className={'description'} sx={sx.description}>
                            {description}
                        </Box>
                    </span>
                }
            </Typography>}
            <TextField
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                variant="outlined"
                fullWidth
                sx={sx.input}
                type="number"
                error={results?.data?.status === 400 && isInputError}
                helperText={isInputError ? results?.message?.replace(/_/g, ' ') : ''}
            />
        </Box>
    );
};

export default Input;
