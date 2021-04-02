import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menu: {
        width: "100%",
        "@media (min-width: 900px)": {
            width: "85%",
        },
    },
    menuUl: {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        listStyle: "none",
        "@media (min-width: 900px)": {
            flexDirection: "row",
            width: "auto",
        },
    },

    menuButton: {
        padding: "20px 40px",
        textalign: "center",
        color: "rgba(0, 0, 0, 0.5)",
        fontweight: "500",
        transition: "0.4s",
        width: "100%",
        "&:hover": {
            color: "rgba(0, 0, 0, 0.7)",
            textDecoration: "none",
            backgroundColor: "rgb(250, 207, 213)",
        },
        "@media (min-width: 900px)": {
            padding: "20px 0px",
        },
        "@media (min-width: 1441px)": {
            padding: "20px 80px",
        },
    },
    menuButtonActive: {
        color: "rgba(0, 0, 0, 0.9)",
    },
}));

export default useStyles;