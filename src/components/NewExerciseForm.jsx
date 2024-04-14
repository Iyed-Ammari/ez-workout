import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import {
  bodyPartList,
  equipments,
  targets,
  secondaryMuscles,
} from "../data/dummyData";
import Typography from "@mui/material/Typography";



const NewExerciseForm = () => {
    
const [selectedBodyPart, setSelectedBodyPart] = useState("");
const [selectedEquipment, setSelectedEquipment] = useState("");
const [selectedTarget, setSelectedTarget] = useState("");
  return (
    <form>
      <FormControl fullWidth margin="dense" variant="standard" required>
        <InputLabel htmlFor="id">ID</InputLabel>
        <Input id="id" required type="number" />
      </FormControl>
      <FormControl fullWidth margin="dense" variant="standard" required>
        <InputLabel htmlFor="bodyPart">Body Part</InputLabel>
        <Select
          id="bodyPart"
          value={selectedBodyPart || ""}
          onChange={(e) => setSelectedBodyPart(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {bodyPartList.map((bodyPart, index) => (
            <MenuItem value={bodyPart} key={index}>
              {bodyPart}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="dense" variant="standard" required>
        <InputLabel htmlFor="equipment">Equipment</InputLabel>
        <Select
          id="equipment"
          value={selectedEquipment || ""}
          onChange={(e) => setSelectedEquipment(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {equipments.map((equipment, index) => (
            <MenuItem value={equipment} key={index}>
              {equipment}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="dense" variant="standard" required>
        <InputLabel htmlFor="image">GIF</InputLabel>
        <Input type="file" id="image" />
      </FormControl>
      <FormControl fullWidth margin="dense" variant="standard" required>
        <InputLabel htmlFor="target">Target</InputLabel>
        <Select
          id="target"
          value={selectedTarget || ""}
          onChange={(e) => setSelectedTarget(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {targets.map((target, index) => (
            <MenuItem value={target} key={index}>
              {target}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <fieldset>
        <Typography variant="h6" component="legend" sx={{ margin: "0 20px " }}>
          Secondary Muscles
        </Typography>
        <FormControl
          fullWidth
          margin="dense"
          variant="standard"
          required
          sx={{ marginLeft: "5px" }}
        >
          {secondaryMuscles.map((muscle, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox id={`cb${index}`} />}
              label={muscle}
            />
          ))}
        </FormControl>
      </fieldset>
    </form>
  );
};

export default NewExerciseForm;
