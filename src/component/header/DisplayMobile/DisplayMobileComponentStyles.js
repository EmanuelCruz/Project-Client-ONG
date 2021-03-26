import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
    },
    drawerContainer: {
        width: "40vw",
        padding: "20px 0px",
        "@media (max-width: 425px)": {
            width: "60vw",
        },
    },
}));

export default useStyles;