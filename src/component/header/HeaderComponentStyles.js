import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "whitesmoke",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
        position: 'relative',
    }
}));

export default useStyles;
