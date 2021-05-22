import React from 'react';
import Table from './Table';

import { Container, makeStyles } from '@material-ui/core';

const TableContainer = ({ cities }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="lg">
         <table className={classes.table}>
         <thead>
            <tr>
              <th className={classes.th} scope="col">City</th>
              <th className={classes.th} scope="col">Country</th>
              <th className={classes.th} scope="col">Temperature</th>
              <th className={classes.th} scope="col">Latitud</th>
              <th className={classes.th} scope="col">Longitud</th>
              <th className={classes.th} scope="col">Description</th>
              <th className={classes.th} scope="col">Humidity</th>
              <th className={classes.th} scope="col">Feels Like</th>
              <th className={classes.th} scope="col">Visibility</th>
            </tr>
          </thead>
          <tbody>
            {
                cities.map(c => (
                    <tr key={c.name} className={classes.tr}>
                        <Table key={c.name} info={c} />
                    </tr>
                ))
            }
          </tbody>
         </table>
        </Container>
    )
}

export default TableContainer


const useStyles = makeStyles(() => ({
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        border: '1px solid #463333',
        width: 50,
        padding: 15
    },
    container: {
        overflow: 'auto'
    },
    tr: {
        "&:nth-child(odd)": {
            backgroundColor: "#f2dcbb"
         }
    }
}));