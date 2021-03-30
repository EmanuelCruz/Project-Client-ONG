import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    logo:{
        width: "180px",
        "@media (max-width: 900px)": {
            width: "100%"
        }
    },
    imagenLogo: {
        width: "50px",
        height: "50px",
        "@media (max-width: 900px)": {
            alignSelf: "center",
        },
    },
}));

export default useStyles;