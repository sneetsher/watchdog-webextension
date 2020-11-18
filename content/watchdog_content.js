//console.log(browser.extension.id);
console.log(browser.extension.getURL(""));
//console.log(browser.runtime.getPlatformInfo());
//console.log(browser.runtime.getBrowserInfo());

console.log("put notice...");

function onError(error) {
  console.log(`Error: ${error}`);
}

function onGot(item) {
  let color = "blue";
  if (item.color) {
    color = item.color;
  }
  document.body.style.borderLeft = "10px solid " + color;
}

let getting = browser.storage.sync.get("color");
getting.then(onGot, onError);

//document.body.style.borderLeft = "10px solid red";

let p = document.createElement("p");
p.setAttribute("id", "plugin-notice");
p.textContent = "Notice ........... OK";
p.style.cssText += "background: red; color: white; position: fixed; left: 10; top: 0; z-index: 9999; padding: 2px 5px";
document.body.prepend(p);
console.log("put notice...OK");