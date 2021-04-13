import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    grid: {
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "5%",
        minHeight: "70vh",
    },
    gridTitle: {
        height: "200px",
    },
    gridDescription: {
        minHeight: "70%",
        padding: "2% 0% 2% 0%",
        "@media (min-width: 1280px)": {
            padding: "2% 2% 2% 0%",
        },
    },
    gridDescriptionFull: {
        minHeight: "40vh",
        padding: "2% 0% 0% 0%",
        "@media (min-width: 1280px)": {
            padding: "2% 0% 2% 0%",
        },
    },
    description: {
        maxWidth: "50%",
    },
    gridImage: {
        padding: "2% 0% 0% 0%",
        minHeight: "70%",
        "@media (min-width: 1280px)": {
            padding: "2% 0% 2% 2%",
        },
    },
    img: {
        backgroundSize: "100% 100%",
        height: "200px",
        "@media (min-width: 600px)": {
            backgroundSize: "100% 100%",
            height: "400px",
        },
        "@media (min-width: 1280px)": {
            backgroundSize: "100% 100%",
            height: "430px",
        },
    },
    title: {
        fontSize: "3em",
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    typography: {
        fontFamily: [
            '"Nunito"',
        ].join(','),
    },
}));

export default useStyles;
