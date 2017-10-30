function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var browser = browser||chrome;

browser.contextMenus.create({
    id: 'menu_search_extension',
    title: 'search "%s"',
    contexts: ['selection'],
    onclick: (info, tab)=>{
        var creating = browser.tabs.create({
            url:"https://www.google.com/search?q=" + info.selectionText
        });
        creating.then(onCreated, onError); 
    }
});
