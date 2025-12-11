import { Box, Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {

    return (
    <Box 
            sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(145deg, #2f2f2f, #4d4d4d)", // gunmetal-like
        }}>

        <Typography variant="h3" sx={{ color: "white", mb: 6 }}>
            Welcome One and All
        </Typography>

        <Stack spacing={3}>
            <Button
                component={Link}
                to="/about"
                variant="contained"
                sx={{
                    fontSize: "1.2rem",
                    px: 4,
                    py: 1.5,
                    transition: "0.3s",
                    "&:hover": {
                        transform: "scale(1.08)",
                        boxShadow: "0 0 20px rgba (255,255,255,0.3)"
                    }
                }}>
                About Me
            </Button>

            <Button   
                component={Link} 
                to="/projects" 
                variant="contained"
                sx={{
                    fontSize: "1.2rem",
                    px: 4,
                    py: 1.5,
                    transition: "0.3s",
                    "&:hover": {
                        transform: "scale(1.08)",
                        boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                    }
                }}>
                Projects
            </Button>


        </Stack>

    </Box>
    )
}

export default Home;