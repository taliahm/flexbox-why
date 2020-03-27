import React from "react";

import { withStyles } from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";
import MuiTooltip from "@material-ui/core/Tooltip";

import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import { Div } from "./styled";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(255, 255, 255, .125)",
    boxShadow: "none",
    backgroundColor: "rgba(255, 255, 255, .125)",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(255, 255, 255, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    marginBottom: -1,
    minHeight: 0,
    "&$expanded": {
      minHeight: 0
    }
  },
  expandIcon: {
    padding: 0
  },
  content: {
    "&$expanded": {
      margin: 0
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles({
  root: {
    padding: "8px 24px 14px"
  }
})(MuiExpansionPanelDetails);

const Chip = withStyles({
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: "auto",
    padding: "2px 0",
    margin: "5px"
  }
})(MuiChip);

const Tooltip = withStyles({
  tooltip: {
    fontSize: "18px",
    textAlign: "center",
    border: "1px solid #efd397"
  },
  arrow: {
    color: "#efd397"
  }
})(MuiTooltip);

const listOfValues = [
  {
    value: "justify-content",
    help:
      "flex-end, flex-start, center, space-between, space-around, space-evenly"
  },
  {
    value: "align-items",
    help: "flex-end, flex-start, center, baseline, stretch"
  },
  {
    value: "align-content",
    help: "flex-end, space-between"
  },
  {
    value: "flex-wrap",
    help: "wrap"
  },
  {
    value: "align-self",
    help: "flex-end, flex-start, center"
  }
];

function Hints(props) {
  const { hints } = props;

  return (
    <Div margin="0 auto" width="80%" >
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={"+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Not sure where to start?
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {hints.length > 0 && (
              <div>
                <h4>
                  Try any of these properties. Hover to see
                  their values.
                </h4>
                {listOfValues.map(ob => {
                  if (hints.includes(ob.value)) {
                    return (
                      <Tooltip
                        key={ob.help}
                        title={ob.help}
                        placement="top"
                        interactive
                        arrow
                      >
                        <Chip label={ob.value} />
                      </Tooltip>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Div>
  );
}

export default Hints;
