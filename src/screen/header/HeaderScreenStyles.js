import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: "64px",
        "@media (max-width: 600px)": {
            marginBottom: "56px",
        },
    },
}));

export default useStyles;