import styled from "@emotion/styled"
import ambient from "../assets/ambient.svg"

const Ambient = styled("img")(({ theme }) => {
  return {
    width: "100%",
    position: "absolute",
  }
})

interface FootbarProps {
  bottom?: number;
}

export function Footbar({ bottom }: FootbarProps) {
  return (
    <Ambient src={ambient} style={{ bottom: bottom ?? 0 }}/>
  )
}