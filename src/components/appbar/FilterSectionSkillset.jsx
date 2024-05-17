import { CheckBox, ExpandMore } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary, Divider, FormControlLabel, FormGroup, Stack, Typography } from "@mui/material"

const FilterSectionSkillset = () => {
    return(
        <Stack>
            <Accordion sx={{ boxShadow: 'none' }}>
                <AccordionSummary sx={{ margin: '0px' }} expandIcon={<ExpandMore />}>
                    <Typography sx={{ font: '700 15px Poppins', color: '#212121' }}>Skillset</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{padding: '0 30px 0 30px', margin: '0 0 20px 0'}}>
                    <FormGroup>
                        <FormControlLabel 
                            control={<CheckBox size="small"/>}
                            label="cek"
                        />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Stack alignItems="center">
                <Divider sx={{ width: '90%' }} />
            </Stack>
        </Stack>
    )
}

export default FilterSectionSkillset;