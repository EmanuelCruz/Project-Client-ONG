import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menu: {
        width: "85%",
        "@media (max-width: 900px)": {
            width: "100%",
        },
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

    menuButton: {
        padding: "20px 40px",
        textalign: "center",
        color: "rgba(0, 0, 0, 0.5)",
        fontweight: "500",
        "&:hover": {
            color: "rgba(0, 0, 0, 0.7)",
            textDecoration: "none",
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
}));

export default useStyles;