import React, { useEffect, useState } from "react";
import { TableProps } from "../../types";
import Button from "../Buttons/Button";

const Table: React.FC<TableProps> = (props) => {
  const [perPage, setPerpage] = useState<number>(10);
  const [localData, setLocalData] = useState<any[][]>();
  const [selectedPage, setSelectedPage] = useState<number>(0);

  const initTable = () => {
    console.log("initTable data", props.data);
    const initData = [...props.data];
    const results = [];
    const chunk_size = perPage;
    while (initData.length > 0) {
      results.push(initData.splice(0, chunk_size));
    }

    setLocalData(results);
  };

  // componentDidUpdate
  useEffect(() => {
    initTable();
  }, [props.data, perPage]);
  console.log(props.data, "data dari props");
  return (
    <>
      <table>
        <thead>
          <tr>
            {props.columns.map((column, index) => {
              return <th key={index}>{column.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {localData && localData[selectedPage]
            ? localData[selectedPage].map((data, index) => {
                return (
                  <tr key={index}>
                    {props.columns.map((column, indexColumn) => {
                      let toShown = data[column.key];
                      if (column.render) toShown = column.render(data, index);
                      if (column.dataType === "numbering") {
                        toShown = selectedPage * perPage + index + 1;
                      }
                      return <td key={indexColumn}>{toShown}</td>;
                    })}
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <div className="p-2 flex-row-center justify-between w-full">
        <div className="flex-row-center items-center">
          <div>
            <label htmlFor="perPage">Rows per page</label>
            <select
              onChange={(e) => setPerpage(Number(e.target.value))}
              value={perPage}
              name="perPage"
              id="perPage"
              style={{
                width: "min-content",
                border: "1px solid transparent",
                background: "transparent",
              }}
            >
              <option value={"2"}>{2}</option>
              <option value={"20"}>{20}</option>
              <option value={"50"}>{50}</option>
              <option value={"100"}>{100}</option>
            </select>
          </div>
        </div>
        <div className="flex-row-center justify-between">
          {selectedPage >= 1 ? (
            <Button
              text="Sebelumnya"
              size="btnSmall"
              color="btnInverse"
              onClick={() => setSelectedPage((state) => state - 1)}
            />
          ) : null}
          {localData
            ? Array(localData.length)
                .fill(0)
                .map((d, index) => (
                  <Button
                    key={index}
                    text={`${index + 1}`}
                    size="btnSmall"
                    color={index === selectedPage ? "btnPrimary" : "btnInverse"}
                    onClick={() => setSelectedPage(index)}
                  />
                ))
            : null}
          {localData &&
          localData[selectedPage] &&
          selectedPage !== localData.length - 1 ? (
            <Button
              text="Selanjutnya"
              size="btnSmall"
              color="btnInverse"
              onClick={() => setSelectedPage((state) => state + 1)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Table;
