import React from "react";
import { Container,Divider, Stack } from "@mui/material"


export default function AgentsPage() {
  return (
    <Container className="agency">
      <ul className="navigationName">
        <li>Home</li>
        <li>Agents</li>
      </ul>
     <Divider className="agencyDivider" sx={{ bgcolor: "#A9A8B6" }} />
    </Container>
  );
}