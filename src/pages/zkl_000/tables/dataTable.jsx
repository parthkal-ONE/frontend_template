import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";

const columns = [
  {
    field: "header_A",
    headerName: "Header A",
    valueGetter: (value, row) => row?.header_A,
    width: 150,
  },
  {
    field: "header_B",
    headerName: "Header B",
    valueGetter: (value, row) => row?.header_B,
    width: 150,
  },
  {
    field: "header_C",
    headerName: "Header C",
    valueGetter: (value, row) => row?.header_C,
    width: 150,
  },
  {
    field: "header_D",
    headerName: "Header D",
    valueGetter: (value, row) => row?.header_D,
    width: 150,
  },
];

function TableToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport
        csvOptions={{
          fileName: "File_Name",
          separator: ",",
          utf8WithBom: true,
        }}
      />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: "Change density" } }}
      />
    </GridToolbarContainer>
  );
}

export default function DataGridKit(props) {
  return (
    <Box sx={{ height: "1000px", width: "100%" }}>
      <DataGrid
        loading={props.dataIsLoading}
        getRowId={(row) => row?.header_A}
        rows={props?.inputData || []}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: TableToolbar }}
      ></DataGrid>
    </Box>
  );
}
