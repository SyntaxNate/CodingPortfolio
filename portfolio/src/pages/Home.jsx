import { Box, Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

function RippleLoader() {
    return (
        <Box
           sx={{
                position: "relative",
                width: 140,
                height: 140,
                display: "grid",
                placeItems: "center",
            }}
        >
            {/* center pulse dot */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                boxShadow: "0 0 18px rgba(255,255,255,0.35)",
                }}
            />
           
            {/* ripple rings */}
            {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                animate={{ scale: [0.6, 2.4], opacity: [0.30, 0] }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeOut",
                }}
                style={{
                    position: "absolute",
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.25)",
                    boxShadow: "0 0 20px rgba(255,255,255,0.12)",
                }}
             />
            ))}    
        </Box>
    )
}


function Home() {
    // phases: "intro" -> "ripple" -> "menu"
    const [phase, setPhase] = useState("loader");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("ripple"), 2400) // loader duration
        const t2 = setTimeout(() => setPhase("welcome"), 4200);// intro duration
        const t3 = setTimeout(() => setPhase("menu"), 6400); // ripple duration
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);
    return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(145deg, #2f2f2f, #4d4d4d)",
        position: "relative",
        overflow: "hidden",
        px: 2,
      }}
    >
      {/* Subtle vignette / sheen overlay (optional, looks more “metal”) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.10), transparent 45%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.07), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <AnimatePresence mode="wait">

        {phase === "loader" && (
          <MotionBox
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            sx={{ textAlign: "center", zIndex: 2 }}
          >
            <RippleLoader />
          </MotionBox>
        )}

        {phase === "welcome" && (
            <MotionBox
                key="welcome"
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                transition={{ duration: 1.0 }}
                sx={{ textAlign: "center", zIndex: 2 }}
                >
                <Typography variant="h3" sx={{ color: "white" }}>
                    Welcome One and All
                </Typography>
            </MotionBox>
            
        )}

        {phase === "ripple" && (
          <MotionBox
            key="ripple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            {/* Ripple rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.0, scale: 0.4 }}
                animate={{ opacity: [0.25, 0.0], scale: [0.4, 2.2] }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 0 22px rgba(255,255,255,0.10)",
                }}
              />
            ))}
          </MotionBox>
        )}

        {phase === "menu" && (
          <MotionBox
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            sx={{
              zIndex: 2,
              width: "100%",
              maxWidth: 520,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ color: "white", mb: 6 }}>
                Acuated Clarity
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ width: "100%" }}
            >
              <Stack spacing={3} sx={{ width: "100%" }}>
                <Button
                  component={Link}
                  to="/about"
                  variant="contained"
                  sx={{
                    width: "100%",
                    fontSize: "1.1rem",
                    py: 1.6,
                    borderRadius: 3,
                    transition: "0.25s",
                    "&:hover": {
                      transform: "scale(1.04)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.25)",
                    },
                  }}
                >
                  About Me
                </Button>

                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  sx={{
                    width: "100%",
                    fontSize: "1.1rem",
                    py: 1.6,
                    borderRadius: 3,
                    transition: "0.25s",
                    "&:hover": {
                      transform: "scale(1.04)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.25)",
                    },
                  }}
                >
                  Projects
                </Button>
              </Stack>
            </motion.div>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );

}

export default Home;

