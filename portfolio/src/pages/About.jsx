import { Box, Typography } from "@mui/material";

function About() {

    return (

        <Box sx={{ p: 4 }}>
            <Typography variant="h4"> About Me </Typography>
            <Typography sx={{ mt: 2 }}>
                Where I write about myself, background and skills.
            </Typography>
        </Box>
    )
}

export default About;
