import { styled, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import st from "../../styles/commun.module.scss";

type PropsTypes = {
  placeholder: string;
  label: string;
  type?: string;
  multiline?: boolean;
  fullWidth: boolean;
  required: boolean;
  variant: "standard" | "filled" | "outlined" | undefined;
  rows?: number;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
};

const CustomizedTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: st.primaryColor,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: st.primaryColor,
    },
    "& .MuiInputBase-input": {
        color: "white",
        backdropFilter:" blur(7px)"
    }
  },
});

const AppInputText = (props: PropsTypes) => {
  return (
    <div className={st.input}>
      <CustomizedTextField
        InputLabelProps={{
          style: { color: "white" }      
        }}
        label={props.label}
        type={props.type}
        placeholder={props.placeholder}
        variant={props.variant}
        multiline={props.multiline}
        rows={props.rows}
        fullWidth={props.fullWidth}
        required={props.required}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default AppInputText;
