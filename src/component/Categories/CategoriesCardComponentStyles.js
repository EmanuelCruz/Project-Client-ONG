import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    nameCategory: {
        margin: "0",
        textAlign: "left",
        minWidth: "90px"
    },
}));

export default useStyles;