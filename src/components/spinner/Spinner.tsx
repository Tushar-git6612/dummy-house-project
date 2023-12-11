import React, { memo } from "react";

function Spinner() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="mt-5 spinner-border text-primary"
          style={{ width: "40px", height: "40px" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default memo(Spinner);
