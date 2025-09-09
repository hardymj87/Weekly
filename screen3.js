(function(){
  function setDate(){
    const el=document.getElementById("s3_currentDate");
    if(el) el.textContent=new Date().toLocaleDateString();
  }
  document.getElementById("s3_loadBtn").addEventListener("click",async()=>{
    const date=document.getElementById("s3_execDate").value;
    if(!date) return alert("Pick a date");
    const items=await MockWeekly.fetchItemsByDate(date);
    const container=document.getElementById("s3_entries");
    container.innerHTML="";
    const grouped={};
    items.forEach(it=>{
      const k=it.CaseCategory||"Uncategorized";
      (grouped[k]=grouped[k]||[]).push(it);
    });
    Object.entries(grouped).forEach(([cat,group])=>{
      const h=document.createElement("h3");
      h.textContent=cat;
      container.appendChild(h);
      group.forEach(it=>{
        const div=document.createElement("div");
        div.innerHTML=`<strong>${it.Title}</strong> - ${it.Status}`;
        container.appendChild(div);
      });
    });
  });
  setDate();
})();
