import { CheckBox, ExpandMore } from "@mui/icons-material";
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

const FilterSectionPosition = (props) => {
  const data = props.positions;

  return (
    <Stack>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary sx={{ margin: "0px" }} expandIcon={<ExpandMore />}>
          <Typography sx={{ font: "700 15px Poppins", color: "#212121" }}>
            Position
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: "0 30px 0 30px", margin: "0 0 20px 0" }}
        >
          <FormGroup>
            {data?.map((item) => (
              <FormControlLabel
                key={item?.id}
                control={<CheckBox size="small" />}
                label={item?.name}
                onChange={(e) => {
                  const name = item.name;
                  if (e.target.checked) {
                    props.onFilterChange([...props.selectedValue, name]);
                  } else {
                    props.onFilterChange(
                      props.selectedValue.filter(
                        (selected) => selected !== name
                      )
                    );
                  }
                }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Stack alignItems="center">
        <Divider sx={{ width: "90%" }} />
      </Stack>
    </Stack>
  );
};

FilterSectionPosition.propTypes = {
  positions: PropTypes.array,
  selectedValue: PropTypes.bool,
  onFilterChange: PropTypes.func,
};

export default FilterSectionPosition;
