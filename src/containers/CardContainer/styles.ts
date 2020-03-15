import { Theme, StyleRules } from '@material-ui/core';

const styles = (theme: Theme): StyleRules<string, { color: string }> => ({
    patientCardContainer: {
        padding: theme.spacing(3),
        border: props => `3px solid ${props.color}`,
    },
    noPatient: {
        marginTop: theme.spacing(2),
    },
    cardHeader: {
        backgroundColor: props => props.color,
        color: 'white',
    }
})

export default styles;