import { Theme } from '@material-ui/core';

const styles = (theme: Theme) => ({
    patientCard: {
        marginTop: theme.spacing(2),
        border: '1px solid #bdbdbd',
        boxShadow: 'none',
    },
    listTitle: {
        fontStyle: 'bold'
    },
    arrythmiasList: {
        display: 'flex'
    },
    arrythmia: {
        marginRight: theme.spacing(1),
        borderRadius: '4px !important',
    },
    actionButton: {
        boxShadow: 'none',
        marginRight: theme.spacing(1),
    }
})

export default styles;