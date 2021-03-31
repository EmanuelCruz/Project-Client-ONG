import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "5%",
        minHeight: "90vh",
        background: "#FCFCFC",
    },
    gridTitle: {
        height: "300px",
        paddingBottom: "5%",
        paddingTop: "5%",
    },
    gridDescription: {
        minHeight: "70%",
        padding: "5% 0% 5% 0%",
        "@media (min-width: 1280px)": {
            padding: "5% 5% 5% 0%",
        },
    },
    gridImage: {
        padding: "5% 0% 0% 0%",
        minHeight: "70%",
        "@media (min-width: 1280px)": {
            padding: "5% 0% 5% 5%",
        },
    },
    img: {
        backgroundSize: "100% 100%",
        height: "200px",
        "@media (min-width: 600px)": {
            backgroundSize: "100% 100%",
            height: "400px",
        },
        "@media (min-width: 900px)": {
            backgroundSize: "100% 100%",
            height: "500px",
        },
    },
}));

export default useStyles;
