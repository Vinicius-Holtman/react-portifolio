import { Box, styled, Typography } from "@mui/material";
import DvrIcon from '@mui/icons-material/Dvr';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { AboutCard } from "../../../components/AboutCard";
import IconNode from "../../../assets/IconNode.svg"
import { BoxContainer } from "../../../utils/BoxContainer";

const NodeIconBackground = styled("img")(({ theme }) => {
  return {
    position: "absolute",
    height: "500px"
  }
})

export function AboutMeSection() {
  return (
    <BoxContainer>
      <NodeIconBackground src={IconNode} alt="Image Background Node" />

      <Box p="0px 330px" sx={{
        width: "1120px",
        display: "flex",
        marginTop: "90px",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
      }}>
        <Typography variant="h2" color="primary">
          About Me
        </Typography>

        <Box display="flex" gap={4}>
          <AboutCard
            icon={<WorkIcon color="secondary" />}
            title="Experience"
            subtitle="1+ Years Working"
          />
          <AboutCard
            icon={<DvrIcon color="secondary" />}
            title="Projects"
            subtitle="70+ Completed"
          />
          <AboutCard
            icon={<WorkspacePremiumIcon color="secondary" />}
            title="Certificate"
            subtitle="25+ Completed"
          />
        </Box>

        <Typography
          fontWeight={600} variant="body1">
          Programador determinado e ambicioso sempre em busca de novos desafios e conhecimentos.
          Conheci a área de programação em 2018 no curso técnico do SENAI. Minhas primeiras linguagens estudas foram PHP, Javascript e SQL, após estudá-las adquiri apreço por desenvolvimento de aplicações. Possuo conhecimentos e experiência com projetos Full-Stack, meu objetivo dentro da programação é minha capacitação, sempre procurando me desenvolver melhor a cada dia.
        </Typography>
      </Box>
    </BoxContainer>
  )
}