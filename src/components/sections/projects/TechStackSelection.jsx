import * as React from "react";
import { Chip, Box } from "@mui/material";

export default function TechStackSelection({
  chipData,
  setChipData,
  isFilteredChips,
}) {
  const handleToggle = (chip, isFilteredOut) => () => {
    if (chip === "Show All") {
      let newChipData = {};
      for (let i = 0; i < Object.keys(chipData).length; i++) {
        newChipData[Object.keys(chipData)[i]] = false;
      }
      setChipData(newChipData);
    } else {
      setChipData((chips) => ({ ...chips, [chip]: isFilteredOut }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0,
        m: 0,
      }}
      component="ul"
    >
      {!isFilteredChips && (
        <Box
          component="li"
          key="Show All"
          sx={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
        >
          <Chip
            sx={{
              fontWeight: 700,
            }}
            clickable
            label={"Show All".toUpperCase()}
            onClick={handleToggle("Show All", true)}
          />
        </Box>
      )}
      {Object.keys(chipData).map((label) => {
        if (isFilteredChips && !chipData[label]) {
          return null;
        }
        return (
          <Box
            component="li"
            key={label}
            sx={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          >
            <Chip
              sx={{
                fontWeight: 500,
              }}
              clickable={!isFilteredChips}
              label={label.toUpperCase()}
              onDelete={
                isFilteredChips ? handleToggle(label, false) : undefined
              }
              onClick={isFilteredChips ? undefined : handleToggle(label, true)}
            />
          </Box>
        );
      })}
    </Box>
  );
}
