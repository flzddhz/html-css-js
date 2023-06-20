function handleAppendWip() {
  let wips = document.getElementById("wips");
  let newwip = document.getElementById("newwip");
  if (wips && newwip && newwip.value) {
    let wip = document.createElement("div");
    wip.className = "wip-box";
    wip.textContent = newwip.value;
    wips.append(wip);
  }
}

function handleReadWips() {
  let wips = document.getElementById("wips");
  if (wips && wips.children && wips.children.length) {
    let wipArray = [];
    for (let i = 0; i < wips.children.length; i++) {
      wipArray.push(wips.children[i].textContent);
    }
    alert(wipArray.join(','));
  }
}
