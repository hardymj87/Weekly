// Example: swap real fetch with a fake data source for POC.
// Screen 2 / Screen 3 can import this same helper.

window.MockWeekly = {
  async fetchItemsByDate(toExecDate) {
    return [
      { Id:1, Title:"US Project Alpha", Summary:"Completed sprint demo", Status:"(U) In Progress",
        StatusHistory:"No history yet.", ToExec:toExecDate, CCN:"12345",
        OverallClassification:"Unclassified", CaseCategory:"Engineering", Office:"HQ" },
      { Id:2, Title:"S Project Beta", Summary:"Initial draft ready", Status:"(S) Draft",
        StatusHistory:"No history yet.", ToExec:toExecDate, CCN:"67890",
        OverallClassification:"Secret", CaseCategory:"Operations", Office:"Field" }
    ];
  },
  async submit(items){ console.log("POC submit:", items); alert("POC: would submit to SharePoint. See console."); },
  async update(updates){ console.log("POC update:", updates); alert("POC: would update in SharePoint. See console."); }
};
