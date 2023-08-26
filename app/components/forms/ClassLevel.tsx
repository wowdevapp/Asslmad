import { Checkbox, FormControlLabel, FormGroup } from "@mui/material"

export const ClassLevel = () => {

    return (
        <div>
            <h4>Class Level</h4>
            <FormGroup sx={{flexDirection:'row'}}>
                <FormControlLabel  control={<Checkbox defaultChecked />} label="Beginner"/>
                <FormControlLabel  control={<Checkbox />} label="Intermediate" />
                <FormControlLabel  control={<Checkbox />} label="Advanced" />
            </FormGroup>

        </div>
    )
}
