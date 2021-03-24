import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    title: { margin: "5px 0" },
    image: { maxWidth: "100%", maxHeight: "100%", marginBottom: 40 },
    content: { marginTop: 20 },
    links: { marginTop: 60 },
}));

export default myStyles;
