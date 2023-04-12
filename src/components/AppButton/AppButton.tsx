import { Button } from "@mui/material";
import st from "../../styles/commun.module.scss";
import Loading from "../Loading/Loading";

type Props = {
  label: string;
  loading?: boolean;
};

const style = {
  background: "transparent",
  border: `solid ${st.primaryColor}`,
  backdropFilter: "blur(7px)",
  "&:hover": {
    backgroundColor: st.primaryColor,
  },
};

const AppButton = ({ label, loading }: Props) => {
  return (
    <>
      <Button
        disabled={loading}
        type='submit'
        variant='contained'
        color='primary'
        sx={style}
        fullWidth>
        {loading ? <Loading /> : label}
      </Button>
    </>
  );
};

export default AppButton;
