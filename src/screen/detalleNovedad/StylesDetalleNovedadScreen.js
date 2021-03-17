import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    title: { margin: "20px 0" },
    image: { maxWidth: "100%", maxHeight: "100%", marginBottom: 40 },
    content: { marginTop: 60 },
    links: { marginTop: 60 },
}));

export default myStyles;
