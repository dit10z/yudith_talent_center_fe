import { FilterAltOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import FilterSectionSkillset from "./FilterSectionSkillset";
import { positions } from "../../__mocks/talents";
import FilterSectionPosition from "./FilterSectionPosition";

const SideBar = ({ onFilterChange, selectedFilters }) => {
  const titleFilter = {
    font: "700 18px Poppins",
    color: "#212121",
  };

  const handleFilterChange = (filterType, selectedValues) => {
    onFilterChange(filterType, selectedValues);
  };

  return (
    <Stack gap="15px" sx={{ padding: "40px" }}>
      <Stack direction="row" alignItems="center" gap="10px">
        <FilterAltOutlined />
        <Typography sx={titleFilter}>Filter</Typography>
      </Stack>
      <Stack gap="15px">
        <FilterSectionSkillset />
        <FilterSectionPosition positions={positions} />
      </Stack>
    </Stack>
  );
};

export default SideBar;
