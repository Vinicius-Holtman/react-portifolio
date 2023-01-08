import { Box, styled, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { AboutMeSection } from "./AboutMeSection";
import { HomeSection } from "./HomeSection";
import { SkillSection } from "./SkillSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { QualificationSection } from "./QualificationSection";
import ambient from "../../assets/ambient.svg"
import { BackgroundParticle } from "../../lib/BackgroundParticle";
import { BackgroundSky } from "../../lib/BackgroundSky";


export function Home() {
  return (
    <>
      <Box zIndex={2}>
        <HomeSection />
        <AboutMeSection />
        <SkillSection />
        <ProjectsSection />
        <QualificationSection />
        <ContactSection />

        {/* <Box sx={{
          height: "900px",
          widht: "100%"
        }}> */}
        {/* </Box> */}

      </Box>
      {/* <BackgroundParticle />
      <BackgroundSky /> */}
    </>
  )
}