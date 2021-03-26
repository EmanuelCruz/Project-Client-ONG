import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        "@media (max-width: 600px)": {
            marginBottom: "56px",
        },
    },
}));

export default useStyles;