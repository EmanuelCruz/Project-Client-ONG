import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        isplay: "flex",
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
    },
    box: {
        marginTop: 60,
        height: 480,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

}));

export default useStyles;