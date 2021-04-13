import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: 15,
        background: "lightpink",
        "&:hover": {
            backgroundColor: "lightpink",
        },
    }

}));

export default useStyles;