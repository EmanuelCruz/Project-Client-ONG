import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        minHeight: "100vh"
    },
    paper: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        "@media (min-width: 600px)": {
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(0),
        },
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
    gridContainer: {
    }
}));

export default useStyles;