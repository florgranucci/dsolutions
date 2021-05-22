import { useState } from 'react';
import { Container, makeStyles, InputBase, Paper, Button } from '@material-ui/core';

const SearchBar = ({ onSearch }) => {
    const classes = useStyles();

    const [city, setCity] = useState("");

    const submit = (e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
    }

    return (
        <Container maxWidth='lg'>
            <form
                onSubmit={submit}
            >
                <div className={classes.search}>
                    <Paper className={classes.input}>
                        <InputBase
                            placeholder="Search city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </Paper>
                    <Button type='submit' variant="contained" className={classes.btn}>
                        Search
            </Button>
                </div>

            </form>
        </Container>
    );
}

export default SearchBar


const useStyles = makeStyles(() => ({
    input: {
        width: 300,
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50
    },
    btn: {
        width: 100,
        height: 30,
        marginLeft: 8,
        background: 'linear-gradient(315deg, #ffffff 0%, #cea177 74%)',
    }
}));