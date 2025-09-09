(function(){
  let entryCount=0;
  function setDate(){
    const el=document.getElementById("s1_currentDate");
    if(el) el.textContent=new Date().toLocaleDateString();
  }
  function addEntry(){
    const container=document.getElementById("s1_entries");
    const div=document.createElement("div");
    div.innerHTML=`<input placeholder="Title" id="s1_title_${entryCount}"/>
                   <textarea placeholder="Summary" id="s1_summary_${entryCount}"></textarea>`;
    container.appendChild(div);
    entryCount++;
    document.getElementById("s1_submitBtn").disabled=false;
  }
  async function submitAll(){
    const items=[];
    for(let i=0;i<entryCount;i++){
      const t=document.getElementById("s1_title_"+i)?.value||"";
      const s=document.getElementById("s1_summary_"+i)?.value||"";
      if(t && s) items.push({Title:t,Summary:s});
    }
    await MockWeekly.submit(items);
  }
  document.getElementById("s1_addBtn").addEventListener("click",addEntry);
  document.getElementById("s1_submitBtn").addEventListener("click",submitAll);
  setDate();
})();
