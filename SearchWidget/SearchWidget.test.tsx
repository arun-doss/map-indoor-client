
import { SearchExtent, SearchWidget } from "./SearchWidget";
import { assert } from "node:console";

test("Creates the Search Widget for Open Layers Application", ()=> {
    let searchExtent = new SearchExtent(1,1,2,2);
    let searchElem = document.createElement("SearchWidget");
    let searchWidget = new SearchWidget(searchExtent, "google", searchElem);
    expect(searchWidget.isCreated).toBe(true);
})

test("Create the Search Widget and test for failure extent", ()=> {
    let searchExtent = new SearchExtent(2,2,-2,2);
    let searchElem = document.createElement("SearchWidget");
    let searchWidget = new SearchWidget(searchExtent, "google", searchElem);
    expect(searchWidget.isCreated).toBe(false);
})