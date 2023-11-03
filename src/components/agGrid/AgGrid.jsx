import { useCallback, useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MasterDetailModule,
  MenuModule,
  ColumnsToolPanelModule,
]);

const AgGrid = () => {
  //   const [rowData, setRowData] = useState();

  const [rowData] = useState([
    {
      a1: "level 1 - 111",
      b1: "level 1 - 222",
      children: [
        {
          a2: "level 2 - 333",
          b2: "level 2 - 444",
          children: [
            { a3: "level 3 - 5551", b3: "level 3 - 6661" },
            { a3: "level 3 - 5552", b3: "level 3 - 6662" },
            { a3: "level 3 - 5553", b3: "level 3 - 6663" },
            { a3: "level 3 - 5554", b3: "level 3 - 6664" },
            { a3: "level 3 - 5555", b3: "level 3 - 6665" },
            { a3: "level 3 - 5556", b3: "level 3 - 6666" },
          ],
        },
      ],
    },
    {
      a1: "level 1 - 111",
      b1: "level 1 - 222",
      children: [
        {
          a2: "level 2 - 333",
          b2: "level 2 - 444",
          children: [
            { a3: "level 3 - 5551", b3: "level 3 - 6661" },
            { a3: "level 3 - 5552", b3: "level 3 - 6662" },
            { a3: "level 3 - 5553", b3: "level 3 - 6663" },
            { a3: "level 3 - 5554", b3: "level 3 - 6664" },
            { a3: "level 3 - 5555", b3: "level 3 - 6665" },
            { a3: "level 3 - 5556", b3: "level 3 - 6666" },
          ],
        },
      ],
    },
  ]);

  //   const [columnDefs, setColumnDefs] = useState([
  //     { field: "make", filter: true },
  //     { field: "model", editable: true },
  //     { field: "price" },
  //   ]);
  const [columnDefs] = useState([
    { field: "a1", cellRenderer: "agGroupCellRenderer" },
    { field: "b1" },
  ]);

  // DefaultColDef sets props common to all Columns
  const defaultColDef = useMemo(() => {
    // sortable: true,
    return {
      flex: 1,
    };
  }, []);

  const detailCellRendererParams = useMemo(() => {
    return {
      // level 2 grid options
      detailGridOptions: {
        columnDefs: [
          { field: "a2", cellRenderer: "agGroupCellRenderer" },
          { field: "b2" },
        ],
        defaultColDef: {
          flex: 1,
        },
        groupDefaultExpanded: 1,
        masterDetail: true,
        detailRowHeight: 240,
        detailCellRendererParams: {
          // level 3 grid options
          detailGridOptions: {
            columnDefs: [
              { field: "a3", cellRenderer: "agGroupCellRenderer" },
              { field: "b3" },
            ],
            defaultColDef: {
              flex: 1,
            },
          },
          getDetailRowData: (params) => {
            params.successCallback(params.data.children);
          },
        },
      },
      getDetailRowData: (params) => {
        params.successCallback(params.data.children);
      },
    };
  }, []);

  // Example of consuming Grid Event
  //   const cellClickedListener = useCallback((event) => {
  //     console.log("cellClicked", event);
  //   }, []);

  // Example load data from server
  //   useEffect(() => {
  //     fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //       .then((result) => result.json())
  //       .then((rowData) => setRowData(rowData));
  //   }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        defaultColDef={defaultColDef}
        // rowSelection="multiple"
        // onCellClicked={cellClickedListener}
        rowData={rowData}
        columnDefs={columnDefs}
        groupDefaultExpanded={1}
        masterDetail={true}
        detailCellRendererParams={detailCellRendererParams}
      ></AgGridReact>
    </div>
  );
};

export default AgGrid;
