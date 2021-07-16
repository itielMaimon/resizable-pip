import React from "react";
import PIP from "./PIP";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

import "./PIP.css";

const ResizablePIP = ({ content }) => {
  return (
    <div>
      <PIP
        content={
          <ResizableBox
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            className="pip-resizable-content"
            width={600}
            height={500}
            minConstraints={[400, 300]}
          >
            {content}
          </ResizableBox>
        }
      ></PIP>
    </div>
  );
};

export default ResizablePIP;
