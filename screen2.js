(function(){
  function setDate(){
    const el=document.getElementById("s2_currentDate");
    if(el) el.textContent=new Date().toLocaleDateString();
  }
  let items=[];
  document.getElementById("s2_loadItemsBtn").addEventListener("click",async()=>{
    const date=document.getElementById("s2_execDate").value;
    if(!date) return alert("Pick a date");
    items=await MockWeekly.fetchItemsByDate(date);
    const container=document.getElementById("s2_entries");
    container.innerHTML="";
    items.forEach(it=>{
      const div=document.createElement("div");
      div.innerHTML=`<label><input type="checkbox" data-id="${it.Id}"/> ${it.Title}</label>
                     <input placeholder="New Status"/>`;
      container.appendChild(div);
    });
    document.getElementById("s2_updateBtn").disabled=false;
  });
  document.getElementById("s2_updateBtn").addEventListener("click",async()=>{
    const checks=document.querySelectorAll("#s2_entries input[type=checkbox]:checked");
    const updates=[];
    checks.forEach(ch=>{
      const parent=ch.closest("div");
      const status=parent.querySelector("input[placeholder]").value;
      updates.push({Id:ch.dataset.id,Status:status});
    });
    await MockWeekly.update(updates);
  });
  setDate();
})();
