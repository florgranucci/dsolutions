import { makeStyles } from '@material-ui/core';

const Table = ({ info }) => {
    const classes = useStyles();

    const { name, country,temp, lat, lon, description, humidity, feels, visibility } = info;
    return (
        <>
              <td className={classes.td}scope="col">{name}</td>
              <td className={classes.td}scope="col">{country}</td>
              <td className={classes.td}scope="col">{temp}°</td>
              <td className={classes.td}scope="col">{lat}</td>
              <td className={classes.td}scope="col">{lon}</td>
              <td className={classes.td}scope="col">{description}</td>
              <td className={classes.td}scope="col">{humidity}%</td>
              <td className={classes.td}scope="col">{feels}°</td>
              <td className={classes.td}scope="col">{visibility}m</td>
        </>
    )
}

export default Table

const useStyles = makeStyles(() => ({
    td: {
        border: '1px solid #463333',
        padding: 15,
    },
}));