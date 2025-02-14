import React from "react";
import {Box, Button} from "@mui/material";
import {sx} from "./styles";


const DescriptionIcon = ({resultsDescriptions, label}) => {
    return (
        <span>
            <Button sx={sx.descriptionIcon}>
                i
            </Button>
            <Box className={'description'} sx={sx.description}>
                <Box sx={sx.descriptionBackground}>
                    {resultsDescriptions.find(e => e.label === label)?.description}
                </Box>
            </Box>
        </span>
    )
}

export default DescriptionIcon;