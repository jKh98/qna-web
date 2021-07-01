import React, { useCallback, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Pagination from "@material-ui/lab/Pagination";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { useHistory, useLocation } from "react-router-dom";

export function PageFilters({ size, number, total }) {
  const history = useHistory();
  const { search, pathname } = useLocation();

  const handleSetQuery = useCallback(
    (query) => {
      history.push(`${pathname}?${query}`);
    },
    [history, pathname]
  );

  useEffect(() => {
    if (!search) handleSetQuery("page=0&size=5");
  }, [search, handleSetQuery]);

  const onSelectNumber = (_e, number) => {
    const params = new URLSearchParams(search);
    params.set("page", number - 1);
    handleSetQuery(params.toString());
  };

  const onSelectSize = (e) => {
    const params = new URLSearchParams(search);
    params.set("size", e.target.value);
    params.set("page", 0);
    handleSetQuery(params.toString());
  };

  return (
    <Grid container alignItems="baseline">
      <FormControl variant="filled" size="small">
        <Select variant="outlined" value={size} onChange={onSelectSize}>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      <Pagination
        color="secondary"
        count={total}
        page={number}
        onChange={onSelectNumber}
      />
    </Grid>
  );
}
