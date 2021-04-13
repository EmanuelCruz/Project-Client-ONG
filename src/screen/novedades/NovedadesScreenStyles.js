import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    image: { maxWidth: "100%", maxHeight: "100%", marginBottom: 40 },
    content: { marginTop: 20 },
    links: { marginTop: 60 },
    typography: {
        fontFamily: ['"Nunito"'].join(","),
    },
    title: {
        fontSize: "3em",
        marginTop: "1rem",
        marginBottom: "1rem",
    },
}));

export default myStyles;