import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function ButtonComponent(props) {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) =>
  ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (props.pages === 0) return;

    props.setpages(props.pages + 1);
  };

  const prev = () => {
    if (props.pages === 1) return;

    props.setpages(props.pages - 1);
  };

  return (
    <div className="pagination">
      <button
        variant="text"
        className="pagination-button flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={props.pages === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Prev
      </button>
      <div className="flex items-center gap-2">
        <p className="pagination-number" {...getItemProps(props.pages)}>{props.pages}</p>
      </div>
      <button
        variant="text"
        className="pagination-button flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={props.pages === 42}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </button>
    </div>
  );
}