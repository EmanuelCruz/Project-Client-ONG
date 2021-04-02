import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginRight: theme.spacing(2),
        background: "whitesmoke",
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
    menuButton: {
        height: "60px",
        padding: "20px 40px",
        textalign: "center",
        color: "rgba(0, 0, 0, 0.5)",
        fontweight: "500",
        transition: "0.4s",
        "&:hover": {
            color: "rgba(0, 0, 0, 0.7)",
            textDecoration: "none",
            backgroundColor: "rgb(250, 207, 213)",
        },
        "@media (max-width: 900px)": {
            width: "100%",
        },
        "@media (min-width: 1441px)": {
            padding: "20px 80px",
        },
    },
    menuButtonActive: {
        color: "rgba(0, 0, 0, 0.9)",
    },
    menuUl: {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "row",
        width: "80%",
        height: "100%",
        listStyle: "none",
        "@media (max-width: 900px)": {
            flexDirection: "column",
            width: "100%",
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default useStyles;