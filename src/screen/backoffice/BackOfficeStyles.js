import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        minHeight: "100vh"
    },
    paper: {
        marginRight: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    menuItem:{
        padding: "0",
    },
    navLink: {
        color: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        textDecoration: "none",
        height: "100%",
        padding: "6px 16px",
        "&:hover": {
            textDecoration: "none",
            color: "rgba(0, 0, 0, 0.5)",
        },

    },

}));

export default useStyles;