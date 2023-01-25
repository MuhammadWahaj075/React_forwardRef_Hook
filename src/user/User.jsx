import React, { forwardRef } from "react";

const User = (props, ref) => {
  return (
    <div>
      <input
      ref={ref}
        style={{
          marginTop: "2rem",
          // background: "rgb(233, 233, 333)",
          fontWeight: 900,
          fontSize: "1.5rem",
          textTransform: "uppercase",
          color: "	#483D8B",
          height: "50px",
          width: "100%",
          borderRadius: 10,
          textAlign: "center"
        }}
        type="text"
      />
    </div>
  );
};

export default forwardRef(User);
