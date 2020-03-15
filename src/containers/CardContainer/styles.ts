import { Theme } from '@material-ui/core';

const styles = (theme: Theme) => ({
    patientCardContainer: {
        padding: theme.spacing(3),
    },
    noPatient: {
        marginTop: theme.spacing(2),
    },
})

export default styles;